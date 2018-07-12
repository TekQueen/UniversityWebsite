import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const FooterLogos = ({imagesArray, linkTo}) =>
        <div className = 'socialMedia'>
            {
                imagesArray.map(
                    (element, index) => 
                        <a 
                            key = {index}
                            href = {element.linkTo}
                        >
                            <img
                                className = 'socialMediaLogo'
                                src = {element.imageSrc}
                                alt = {element.imageAlt}
                            />
                        </a>                
                )
            }
        </div>

FooterLogos.propTypes = {
    imagesArray: PropTypes.array
}

export default FooterLogos;