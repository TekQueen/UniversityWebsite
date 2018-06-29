import React, {Component} from 'react';

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
                    <div>
                        <h5>
                    دانشگاه اروپائی
                        </h5>

                        <div class = 'footerList'>
                        جمهوری ارمنستان، شهر ایروان– 037
                        </div>

                        <div class = 'footerList'>
                        خیابان داوید آنهاقت ، پلاک 10
                        </div>

                        <div class = 'footerList'>
                        تلفن : 241891  0037410
                        </div>
                    </div>

                    <div>
                        <h5>
                        پست الکترونیکی
                        </h5>

                        <div class = 'footerList'>
                        info@eriicta.com الکترونیکی
                        </div>

                        <div class = 'footerList'>
                            <a href = '#'>www.eriicta.com الکترونیکی</a>
                        </div>

                        <div class = 'footerList'>
                            <a href = '#'>www.eua.am الکترونیکی</a>
                        </div>
                    </div>  
                </div>
                
                <div class = 'socialMedia'>
                    <img src = {instagram} class = 'socialMediaLogo' alt = 'eua logo'/>
                    <img src = {facebook} class = 'socialMediaLogo' alt = 'eua logo'/>
                    <img src = {telegram} class = 'socialMediaLogo' alt = 'eua logo'/>
                </div>

            </div>
        </div>
    );
}

export default Footer;