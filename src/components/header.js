import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../image/logo.png';

import '../App.css';

const Header = () => 
        <header className = 'br lieanerBackground'>
            <div className = 'navBar'>   
                <NavLink to = '/documents'>مدارک</NavLink>
                <NavLink to = ''>رشته ها</NavLink>
                <NavLink to = '/apply'>پیش ثبت نام</NavLink>
                <NavLink to = '/'>خانه</NavLink>             
                <NavLink to = '/'>
                    <img src = {logo} alt = 'eua logo' className = 'logo'/>
                </NavLink>  
            </div>
        </header>


export default Header;