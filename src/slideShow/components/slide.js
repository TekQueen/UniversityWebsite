import React from 'react';
import PropTypes from 'prop-types';

const Slide = props => (
    <figure className = 'headerContainer'>
        <img src = {props.src} alt = 'main' className = 'euaImage br bs'/>
        <div className = 'headerText'>
                <p>
                ز گهواره تا گور دانش بجوی
                </p>     
        </div>
    </figure>
)

Slide.propTypes = {
    src: PropTypes.string
}

export default Slide;