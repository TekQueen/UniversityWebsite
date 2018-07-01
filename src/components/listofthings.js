import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function ListOfThings(props) {
    let listArray = props.listofthings;
    
    let copyOfListArray = listArray.map(
        element => <div className = 'list'>  {element} &#x25CF; </div>
    );

    return (
        <div>
            { copyOfListArray }     
        </div>
    );
}

ListOfThings.proptypes = {
    listofthings: PropTypes.string.isRequired
}

export default ListOfThings;