import React from 'react';

import PropTypes from 'prop-types';

//component

const Checkbox  = ({
        element, 
        checkboxName, 
        handleChange
    }) =>  
        <label 
            className = 'checkBoxcontainer'
        >{element}
            <input
                name = {checkboxName}
                type = 'checkbox'
                onChange = {(event) => handleChange(event)}
            />
            <span className = 'checkmark'></span>
        </label>

Checkbox.propTypes = {
    element: PropTypes.string,
    checkboxName: PropTypes.string, 
    handleChange: PropTypes.func
}
export default Checkbox;