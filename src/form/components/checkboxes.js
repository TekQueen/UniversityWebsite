import React from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

// container

const Checkboxes = ({header, checkboxes, handleChange}) => 

            <div>
                <h3 className = 'applyLabel'>{header}</h3>
                {
                    checkboxes.map( 
                        (element, index) => 
                            <Checkbox
                                key = {index} 
                                element = {element}
                                checkboxName = {element}
                                handleChange = {handleChange}
                            />
                    )
                }
            </div>
 
Checkboxes.propTypes = {
    header: PropTypes.string,
    checkboxes: PropTypes.array,  
    handleChange: PropTypes.func
}
export default Checkboxes;