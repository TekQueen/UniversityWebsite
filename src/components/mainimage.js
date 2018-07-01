import React from 'react';
import PropTypes from 'prop-types';

import euaImage from '../image/eua.jpg';

import ApplyButton from './applyButton';

import '../App.css';

function MainImage(props) {
    return (
        <section id = 'headerContainer'>
        
            <img 
                src = {euaImage} 
                alt = 'European University of Armenia' 
                id = 'euaImage'
            />

            <div id = 'headerText'>
                <h1>
                    An investment in knowledge pays the best interest.
                </h1>   
            </div>

           <ApplyButton clickHandler = {props.clickHandler} />
          
      
        </section>
    );
}

MainImage.proptypes = {
    clickHandler: PropTypes.func.isRequired,
}

export default MainImage;