import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const FooterLogos = ({imagesArray}) =>
        <div className = 'socialMedia'>
            {
                imagesArray.map(
                    (element, index) => 
                        <img
                            className = 'socialMediaLogo'
                            key = {index}
                            src = {element.imageSrc}
                            alt = {element.imageAlt}
                        />
                    
                          
                )
            }
        </div>

FooterLogos.prototype = {
    imagesArray: PropTypes.array
}

export default FooterLogos;