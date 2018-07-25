import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FooterLogos extends PureComponent {
    render() {
        const {imagesArray} = this.props;
        
        return (
            <section className = 'socialMedia'>
            {
                imagesArray.map(
                    (element, index) => 
                        <a 
                            key = {index}
                            href = {element.linkTo}
                            target = '_blank'
                        >
                            <img
                                className = 'socialMediaLogo'
                                src = {element.imageSrc}
                                alt = {element.imageAlt}
                            />
                        </a>                
                )
            }
        </section>
        );
    }
}
        
FooterLogos.propTypes = {
    imagesArray: PropTypes.array,
}

export default FooterLogos;