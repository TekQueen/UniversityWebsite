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
                    contentHeader = 'دانشگاه اروپائی'
                    content = {[
                        'جمهوری ارمنستان، شهر ایروان– 0037',
                        'خیابان داوید آنهاقت ، پلاک 10',
                        'طبقه ی ۵',
                        'دفتر ثبت نام دانش جویان خارجی اتاق ایران شناسی',
                        'تلفن : 241891  0037410',
                    ]}
                />

                <FooterContent 
                    contentHeader = 'پست الکترونیکی '
                    contentLinks = {[
                        {
                            link: 'www.era.am',
                            to: 'http://eua.am/'
                        }
                    ]}
                />
                 
            </div>
                             
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

            </div>
        </div>
 


export default Footer;