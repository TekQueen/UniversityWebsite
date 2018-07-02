import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function FooterLogos(props) {
    let imagesArray = props.imagesArray;

    imagesArray = imagesArray.map(
        (element, index) => 
            <img
                className = 'socialMediaLogo'
                key = {index}
                src = {element.imageSrc}
                alt = {element.imageAlt}
            />
        
              
    );

    return (
        <div className = 'socialMedia'>
            {imagesArray}
        </div>
    );
}

FooterLogos.prototype = {
    imagesArray: PropTypes.array
}

export default FooterLogos;