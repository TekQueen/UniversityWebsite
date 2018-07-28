import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import Line from '../../components/line';
import LongText from '../../components/longtext';
import ListOfThingsBox from '../../components/listofthingsbox';

class AboutUs extends PureComponent {

    constructor(props) {
        super(props);
        this.eurashe = <a href = 'https://www.eurashe.eu/' target = '_blank' rel = 'noopener noreferrer' >EURASHE</a>;
    }

    render() {
        const {
            aboutusHeader,
            longTexes,
            listOfThingsBox
        } = this.props;
        return (
            <section id = 'aboutUsSection'>
                <header>
                    <h2>{aboutusHeader}</h2>
                </header>

                {
                    longTexes.map(
                        (element, index) => 
                            <section key = {index}>
                                <LongText 
                                    aboutUsText = {element}
                                />
                            </section>
                    )
                }

                <section>             
                    <LongText
                        aboutUsText =  {
                            <Fragment>
                                دانشگاه اروپایی ارمنستان عضو انجمن <Fragment>{this.eurashe}</Fragment> می باشد. در این انجمن ۵۰۰ دانشگاه معتبر از ۴۰ کشور جهان عضو می باشند.مدارک کارشناسی، کارشناسی ارشد و دکترای دانشگاه های عضو این انجمن مورد تأیید یکدیگر می باشد
                            </Fragment>
                        }
                    />
                </section>

                {
                    listOfThingsBox.map(
                        (element, index) => 
                                <Fragment>
                                    <Line />
                                    <ListOfThingsBox
                                        key = {index} 
                                        sectionHeader = {element[0].sectionHeader}
                                        listofthings = {element[0].list}
                                    />
                                </Fragment>
                            )
                }             
            </section>   
        );
    }
}

AboutUs.protoTypes = {
    aboutusHeader: PropTypes.string,
    longTexes: PropTypes.array,
    listOfThingsBox: PropTypes.array
}

export default AboutUs;