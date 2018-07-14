import React, {Fragment} from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

// container

const Checkboxes = ({
            header, 
            checkboxes,
            handleChange, 
            inputType,
            checkboxName
            }) => 

            <fieldset>
                <legend className = 'applyLabel'>
                    {header}
                </legend>
                {
                    checkboxes.map( 
                        (element, index) =>
                            <Fragment key = {index} > 
                                <Checkbox                     
                                    element = {element}
                                    checkboxName = {checkboxName}
                                    value = {element}
                                    handleChange = {handleChange}
                                    inputType = {inputType}
                                />
                            </Fragment>
                    )
                }
            </fieldset>
 
Checkboxes.propTypes = {
    header: PropTypes.string,
    checkboxes: PropTypes.array,  
    handleChange: PropTypes.func,
    inputType: PropTypes.string
}
export default Checkboxes;