import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ 
                    inputLabel, 
                    inputType, 
                    inputPlaceHolder, 
                    inputId, 
                    inputName,
                    value,
                    handleChange
                } ) =>  
                    <div>
                        <h3 className = 'applyLabel'>{inputLabel}</h3>
                        <input 
                            className = 'applyInput'
                            id = {inputId} 
                            name = {inputName}
                            type = {inputType}
                            placeholder = {inputPlaceHolder}
                            onChange = {handleChange}
                            value = {value}
                        />
                    </div>

Inputs.propTypes = {
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
    inputPlaceHolder: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string

}
export default Inputs;