import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../image/logo.png';

import '../App.css';

class Header extends React.Component {
    

render(){
    return (
        <header>
            <img src = {logo} id = 'logo' alt = 'eua logo' />

            <div id = 'navBar'>
                <NavLink to = '/documents'>مدارک</NavLink>
                <NavLink to = ''>رشته ها</NavLink>
                <NavLink to = '/'>درباره ی ما</NavLink>
            </div>
        </header>
    );
}
}

export default Header;