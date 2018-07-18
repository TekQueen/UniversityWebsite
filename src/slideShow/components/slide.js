import React from 'react';
import PropTypes from 'prop-types';

const Slide = props => (
    <figure className = 'headerContainer'>
        <img src = {props.src} className = 'euaImage br bs'/>
        <div className = 'headerText'>
                <p>
                درخت تو گر بار دانش بگیرد
                </p> 
                <p>
                به زیر آورد چرخ نیلوفری را
                </p>     
        </div>
    </figure>
)

Slide.propTypes = {
    src: PropTypes.string
}

export default Slide;