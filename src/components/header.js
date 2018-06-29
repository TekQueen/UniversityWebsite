import React, {Component} from 'react';
import logo from '../image/logo.png';
import '../App.css';

function Header(props) {
    
    let aboutUs = `#${props.aboutUsId}`;
    let documents = `#${props.documentsId}`;

    return (
        <header>
            <img src = {logo} id = 'logo' alt = 'eua logo'/>

            <div id = 'navBar'>
                <a href = {documents}>مدارک</a>
                <a href = '#'>رشته ها</a>
                <a href = {aboutUs}>درباره ی ما</a>
            </div>

        </header>
    );
}

export default Header;