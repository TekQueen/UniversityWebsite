import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const ListOfThings = ({listofthings, isBlue}) =>
        <Fragment>
            
            {         
                listofthings.map(
                    (element, index) => 
                        <Fragment 
                            key = {index}
                        > 
                            <section className = 'list'>  
                                {element}
                                <section 
                                    className = {(isBlue ? 'dot blueDot': 'dot')}
                                >
                                </section>
                            </section>
                        </Fragment>
                                        
                )
            } 
              
        </Fragment>
 

ListOfThings.propTypes = {
    listofthings: PropTypes.array.isRequired,
    isBlue: PropTypes.bool
}

export default ListOfThings;