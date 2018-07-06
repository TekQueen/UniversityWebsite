import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const MiniImage = ({imgSrc, imgAlt}) => {
    return (
        <React.Fragment>
            <img
                className = 'miniImage br bs' 
                src = {imgSrc}
                alt = {imgAlt}
            />
        </React.Fragment>
    );
}

MiniImage.proptypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default MiniImage;