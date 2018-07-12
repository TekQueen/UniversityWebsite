import React from 'react';
import PropTypes from 'prop-types';

import ListOfThings from './listofthings';
import Line from './line';

const EachDocumentSection = ({header, listofthings}) => 
    <div>
        <h3 className = 'documentsH'>{header}</h3>

        <ListOfThings
            isBlue = {true}
            listofthings = {listofthings} 
        />

        <div className = 'line innerLine'>
            <Line />
        </div>
    </div>

EachDocumentSection.propTypes = {
    header: PropTypes.string,
    listofthings: PropTypes.array
}

export default EachDocumentSection;