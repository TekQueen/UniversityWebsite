import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function MiniImage(props) {
    return (
        <React.Fragment>
            <img
                className = 'miniImage' 
                src = {props.imgSrc}
                alt = {props.imgAlt}
            />
        </React.Fragment>
    );
}

MiniImage.proptypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default MiniImage;