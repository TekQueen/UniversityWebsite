import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../image/logo.png';

import '../App.css';

const Header = () => 
        <header className = 'br lieanerBackground'>
            <div className = 'navBar'> 

                <div className = 'nav'>
                    <NavLink to = '/'>خانه</NavLink>
                    <NavLink to = '/apply'>پیش ثبت نام</NavLink>
                    <NavLink to = '/majors'>رشته ها</NavLink>
                    <NavLink to = '/documents'>مدارک</NavLink>
                </div>
                
                <div className = 'logo'>
                    <NavLink to = '/'>
                        <img src = {logo} alt = 'eua logo' />
                    </NavLink>
                </div>
                              
            </div>

            
        </header>


export default Header;