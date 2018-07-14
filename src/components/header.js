import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../image/logo.png';

import '../App.css';

const Header = () => 
            <nav className = 'navBar br lieanerBackground'> 

                <nav className = 'nav'>
                    <NavLink to = '/'>خانه</NavLink>
                    <NavLink to = '/apply'>پیش ثبت نام</NavLink>
                    <NavLink to = '/majors'>رشته ها</NavLink>
                    <NavLink to = '/documents'>مدارک</NavLink>
                </nav>
                
                <nav className = 'logo'>
                    <NavLink to = '/'>
                        <img src = {logo} alt = 'eua logo' />
                    </NavLink>
                </nav>
                              
            </nav>     
      


export default Header;