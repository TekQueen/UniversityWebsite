import React from 'react';
import PropTypes from 'prop-types';

import logo from '../image/logo.png';

import '../App.css';

function Header(props) {
    
    let aboutUs = `#${props.aboutUsId}`;
    let documents = `#${props.documentsId}`;

    return (
        <header>
            <img src = {logo} id = 'logo' alt = 'eua logo' />

            <div id = 'navBar'>
                <a href = {documents}>مدارک</a>
                <a href = {documents}>رشته ها</a>
                <a href = {aboutUs}>درباره ی ما</a>
            </div>
        </header>
    );
}

Header.propTypes = {
    aboutUsId: PropTypes.string.isRequired,
    documentsId: PropTypes.string.isRequired
}

export default Header;