import React from 'react';
import PropTypes from 'prop-types';

const SliderDots = ({handleSlider}) => (
    <section className = 'sliderDotContainers'>
        <span className = 'sliderDot'
            onClick = {event => handleSlider(1, event)}
        ></span>

        <span className = 'sliderDot'
            onClick = {event => handleSlider(2, event)}
        ></span>
        
        <span className = 'sliderDot'
            onClick = {event => handleSlider(3, event)}
        >
        </span>
    </section> 
)

SliderDots.propTypes = {
    handleSlider: PropTypes.func
}

export default SliderDots;