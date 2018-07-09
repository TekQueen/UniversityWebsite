import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const FooterContent = ({content, contentLinks, contentHeader}) => 
        <div>
            {(content) ? content.map(
            (element, index) => 
            <div 
                className = 'footerList'
                key = {index}
            >    
                {element}
            </div>
            ): null}
            
            {(contentLinks) ? contentLinks.map(
            (element, index) => 
                <a
                    className = 'footerList footerListLink'
                    key = {index}
                    href = {element.to}
                >
                    {element.link}
                </a>
                
        ): null}
        </div>
 
FooterContent.proptypes = {
    content: PropTypes.array,
    contentLinks: PropTypes.array
}

export default FooterContent;