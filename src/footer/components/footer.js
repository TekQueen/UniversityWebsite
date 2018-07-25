import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import FooterLogos from './footerlogos';
import FooterContent from './footercontent';

import instagram from '../imgs/instagram.png';
import facebook from '../imgs/facebook.png';
import telegram from '../imgs/telegram.png';


class Footer extends PureComponent {

    render() {

        const {
            footerContentArr, 
            footerLinksArr
        } = this.props;

        return (  
            <section className = 'footer br lieanerBackground'>
 
            <section id = 'footerFirstPart'>
                {
                    footerContentArr.map(
                        (element, index) => 
                            <FooterContent 
                                key = {index}
                                content = {element.content}
                            />
                        )
                }

                {
                    footerLinksArr.map(
                        (element, index) => 
                            <FooterContent 
                                key = {index}
                                contentLinks = {element}
                            />
                    )
                }
                    
            </section>
                             
                <FooterLogos 
                    imagesArray = {[    
                        {
                            imageSrc: `${instagram}`,
                            imageAlt: `instagram logo`,
                            linkTo: `https://www.instagram.com/european.u/?hl=en`           
                        },                       
                        {
                            imageSrc: `${facebook}`,
                            imageAlt: `facebook logo`,
                            linkTo: `https://www.facebook.com/Euauniversity/`
                        },                        
                        {
                            imageSrc: `${telegram}`,
                            imageAlt: `telegram logo`,
                            linkTo: `https://t.me/Eriicta`
                        },
                    ]}
                />

            </section>
        );
    }  
}

Footer.porpTypes = {
    footerContentArr: PropTypes.array,
    footerLinksArr: PropTypes.array
}

export default Footer;