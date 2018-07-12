import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const ListOfThings = ({listofthings, isBlue}) =>
        <div>
            
            {         
                listofthings.map(
                    (element, index) => 
                                <div 
                                        className = 'list'
                                        key = {index}
                                    >   
                                        {element}
                                    <div 
                                        className = {(isBlue ? 'dot blueDot': 'dot')}
                                    >
                                    </div>
                                </div>
                                        
                )
            } 
              
        </div>
 

ListOfThings.propTypes = {
    listofthings: PropTypes.array.isRequired,
    isBlue: PropTypes.bool
}

export default ListOfThings;