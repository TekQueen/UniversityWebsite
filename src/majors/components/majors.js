import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import conferenceRoom from '../imgs/conference.jpg'

import ListOfThings from '../../components/listofthings';
import MajorSection from './majorSection';
import Line from '../../components/line';
import MainImage from '../../components/mainimage';

class Majors extends PureComponent {

    render() {
        return (
            <section className = 'animatedText'>
                <MainImage src = {conferenceRoom} />

                <header>
                    <p className = 'documentsContentH1'>{this.props.header}</p>
                </header>

                {
                    this.props.majorSectionArr.map(
                        (element, index) => 
                            <MajorSection 
                                key = {index}
                                major = {element[0].majorHeader}
                            >
                                <Line />
                                    <ListOfThings 
                                        isBlue = {true}
                                        listofthings = {element[0].majorList}  
                                    />
                                <Line />
                            </MajorSection>
                    )
                }
            </section>
        );
    }
}

Majors.porpTypes = {
    header: PropTypes.string,
    majorSectionArr: PropTypes.array
}

export default Majors;