import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function ListOfThings(props) {
    let listArray = props.listofthings;
    
    listArray = listArray.map(
        (element, index) => <div 
                                className = 'list'
                                key = {index}
                            >  
                                {element} &#x25CF; 
                            </div>
    );

    return (
        <div>
            { listArray }     
        </div>
    );
}

ListOfThings.proptypes = {
    listofthings: PropTypes.string.isRequired
}

export default ListOfThings;