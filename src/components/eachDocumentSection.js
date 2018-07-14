import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import ListOfThings from './listofthings';
import Line from './line';

const EachDocumentSection = ({header, listofthings}) => 
    <Fragment>
        <header>
            <h3 className = 'documentsH'>{header}</h3>
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