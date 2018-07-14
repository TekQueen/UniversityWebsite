import React, {Fragment} from 'react';
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
                    <Fragment>

                        <label className = 'applyLabel' htmlFor = {inputName}>{inputLabel}</label>
                        <input 
                            className = 'applyInput'
                            id = {inputId} 
                            name = {inputName}
                            type = {inputType}
                            placeholder = {inputPlaceHolder}
                            onChange = {handleChange}
                            value = {value}
                            aria-required = 'true'
                            aria-label = {inputName}
                            required
                        />

                    </Fragment>

Inputs.propTypes = {
    inputLabel: PropTypes.string,
    inputType: PropTypes.string,
    inputPlaceHolder: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string

}
export default Inputs;