import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FooterContent extends PureComponent {
    render() {
        const {content, contentLinks } = this.props;
        
        return (
            <section>
                {(content) ? content.map(
                (element, index) => 
                <section 
                    className = 'footerList'
                    key = {index}
                >    
                    {element}
                </section>
                ): null}
                
                {(contentLinks) ? contentLinks.map(
                (element, index) => 
                    <a
                        className = 'footerList footerListLink'
                        key = {index}
                        href = {element.to}
                        target="_blank"
                    >
                        {element.link}
                    </a>
                    
            ): null}
        </section>
        )
    }
}
 
FooterContent.propTypes = {
    content: PropTypes.array,
    contentLinks: PropTypes.array
}

export default FooterContent;