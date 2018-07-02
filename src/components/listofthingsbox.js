import React from 'react';
import PropTypes from 'prop-types';

import ListOfThings from './listofthings';
import MiniImage from './miniImage';

import '../App.css';

function ListOfThingsBox(props) {
    return(
        <React.Fragment>
        
            <h3 className = 'sectionHeader'>{props.sectionHeader}</h3>

                <div className = 'aboutUs'>

                <MiniImage 
                    imgSrc = {props.imgSrc}
                    imgAlt = {props.imgAlt}
                />

                <ListOfThings 
                    listofthings = {props.listofthings}
                />
            </div>
        </React.Fragment>
    );
}

ListOfThingsBox.proptypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    listofthings: PropTypes.array
}

export default ListOfThingsBox;