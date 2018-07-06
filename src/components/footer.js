import React from 'react';

import FooterLogos from './footerlogos';
import FooterContent from './footercontent';

import instagram from '../image/instagram.png';
import facebook from '../image/facebook.png';
import telegram from '../image/telegram.png';

import '../App.css';

const Footer = () => 
        <div>
            
            <div className = 'footer br lieanerBackground'>
 
            <div id = 'footerFirstPart'>

                <FooterContent 
                    contentHeader = 'پست الکترونیکی '
                    contentLinks = {[
                    'info@eriicta.com',
                    'www.eriicta.com',
                    'www.era.am',
                    ]}
                />
                
                <FooterContent 
                    contentHeader = 'دانشگاه اروپائی'
                    content = {[
                        'جمهوری ارمنستان، شهر ایروان– 037',
                        'خیابان داوید آنهاقت ، پلاک 10',
                        'تلفن : 241891  0037410',
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
 


export default Footer;