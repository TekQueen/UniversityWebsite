import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../imgs/logo.png';

class Header extends PureComponent {
    render() {
        return (
            <nav className = 'navBar br lieanerBackground'> 

                <nav className = 'nav'>
                    {
                        this.props.navArray.map(
                            (element, index) =>  
                                <NavLink  
                                    key = {index} 
                                    to = {element.to}
                                >
                                    {element.label}
                                </NavLink>            
                        )
                    }
                </nav>
                
                <nav>
                    <NavLink to = '/'>
                        <img src = {logo} alt = 'eua logo' />
                    </NavLink>
                </nav>
                              
            </nav>
        )
    }
}

Header.proptypes = {
    navArray: PropTypes.array
}
 
export default Header;