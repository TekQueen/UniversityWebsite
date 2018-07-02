import React from 'react';

import FooterLogos from './footerlogos';
import FooterContent from './footercontent';

import logo from '../image/logo.png';
import instagram from '../image/instagram.png';
import facebook from '../image/facebook.png';
import telegram from '../image/telegram.png';

import '../App.css';

function Footer(props) {
    return (
        <div>
            <div id = 'footerLogo'>
                <img src = {logo} id = 'logo' alt = 'eua logo'/>
            </div>
            
            <div id = 'footer'>
 
            <div id = 'footerFirstPart'>

                <FooterContent 
                    contentHeader = 'دانشگاه اروپائی'
                    content = {[
                        'جمهوری ارمنستان، شهر ایروان– 037',
                        'خیابان داوید آنهاقت ، پلاک 10',
                        'تلفن : 241891  0037410',
                    ]}
                />

                <FooterContent 
                    contentHeader = 'پست الکترونیکی '
                    contentLinks = {[
                    'info@eriicta.com',
                    'www.eriicta.com',
                    'www.era.am',
                    ]}
                />
                 
            </div>
                             
                <FooterLogos 
                    imagesArray = {[    
                        {
                            imageSrc: `${instagram}`,
                            imageAlt: `instagram logo`
                        },                       
                        {
                            imageSrc: `${facebook}`,
                            imageAlt: `facebook logo`
                        },                        
                        {
                            imageSrc: `${telegram}`,
                            imageAlt: `telegram logo`
                        },
                    ]}
                />

            </div>
        </div>
    );
}

export default Footer;