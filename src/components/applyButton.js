import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

function  ApplyButton (props) {

    return (
        <div id = 'applyNow'>

            <NavLink 
                id = 'applyButton'
                to = '/apply'
            >
                APPLY NOW
            </NavLink>
                           
        </div>
        );
}

export default ApplyButton;