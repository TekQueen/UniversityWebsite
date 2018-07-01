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

                        <div className = 'footerList'>
                        جمهوری ارمنستان، شهر ایروان– 037
                        </div>

                        <div className = 'footerList'>
                        خیابان داوید آنهاقت ، پلاک 10
                        </div>

                        <div className = 'footerList'>
                        تلفن : 241891  0037410
                        </div>
                    </div>

                    <div>
                        <h5>
                        پست الکترونیکی
                        </h5>

                        <div className = 'footerList'>
                        info@eriicta.com الکترونیکی
                        </div>

                        <div className = 'footerList'>
                            <a href = '#'>www.eriicta.com الکترونیکی</a>
                        </div>

                        <div className = 'footerList'>
                            <a href = '#'>www.eua.am الکترونیکی</a>
                        </div>
                    </div>  
                </div>
                
                <div className = 'socialMedia'>
                    <img src = {instagram} className = 'socialMediaLogo' alt = 'eua logo'/>
                    <img src = {facebook} className = 'socialMediaLogo' alt = 'eua logo'/>
                    <img src = {telegram} className = 'socialMediaLogo' alt = 'eua logo'/>
                </div>

            </div>
        </div>
    );
}

export default Footer;