import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function FooterContent(props) {

    if (props.content) {
        var contentArray = props.content;
        contentArray = contentArray.map(
            (element, index) => 
            <div 
                className = 'footerList footerListElement'
                key = {index}
            >
                {element}
            </div>
        ); 
    }
    

    if (props.contentLinks) {
        var contentLinksArray = props.contentLinks;
        contentLinksArray = contentLinksArray.map(
            (element, index) => 
                <a
                    className = 'footerList footerListLink'
                    key = {index}
                >
                    {element}
                </a>
        );
    }

    return(
        <div>
            <h5>{props.contentHeader}</h5>
            {(contentArray) ? contentArray: null}
            {(contentLinksArray) ? contentLinksArray: null}
        </div>
    );
}

FooterContent.proptypes = {
    content: PropTypes.array,
    contentLinks: PropTypes.array
}

export default FooterContent;