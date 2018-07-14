import React from 'react';

import PropTypes from 'prop-types';

//component

const Checkbox  = ({
        element, 
        checkboxName, 
        handleChange,
        inputType,
        value
    }) =>  
        <label 
            className = 'checkBoxcontainer'
        >{element}
            <input
                name = {checkboxName}
                type = {inputType}
                value = {value}
                onChange = {(event) => handleChange(event)}
            />
            <span className = 'checkmark'></span>
        </label>

Checkbox.propTypes = {
    element: PropTypes.string,
    checkboxName: PropTypes.string, 
    handleChange: PropTypes.func,
    inputType: PropTypes.string
}
export default Checkbox;