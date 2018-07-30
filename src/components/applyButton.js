import React from 'react';
import { NavLink } from 'react-router-dom';

const  ApplyButton  = () => {

    return (
        <div id = 'applyNow'>

            <NavLink 
                className = 'applyButton br'
                to = '/apply'
            >
                پیش ثبت نام
            </NavLink>
                           
        </div>
        );
}

export default ApplyButton;