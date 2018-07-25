import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import ListOfThings from '../../components/listofthings';
import Line from '../../components/line';

const EachDocumentSection = ({header, listofthings, isRed}) => 
    <Fragment>
        <header>
            <h3  className =  {isRed ? 'documentsRedH': 'documentsH'}>{header}</h3>
        </header>

        <ListOfThings
            isBlue = {true}
            listofthings = {listofthings} 
        />

        <section className = 'line innerLine'>
            <Line />
        </section>
    </Fragment>

EachDocumentSection.propTypes = {
    header: PropTypes.string,
    listofthings: PropTypes.array
}

export default EachDocumentSection;