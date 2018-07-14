import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const ListOfThings = ({listofthings, isBlue}) =>
        <div>
            
            {         
                listofthings.map(
                    (element, index) => 
                        <Fragment 
                            key = {index}
                        > 
                            <section  className = 'list'>  
                                {element}
                                <section 
                                    className = {(isBlue ? 'dot blueDot': 'dot')}
                                >
                                </section>
                            </section>
                        </Fragment>
                                        
                )
            } 
              
        </div>
 

ListOfThings.propTypes = {
    listofthings: PropTypes.array.isRequired,
    isBlue: PropTypes.bool
}

export default ListOfThings;