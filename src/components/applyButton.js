import React from 'react';

import '../App.css';

function  ApplyButton (props) {

    return (
        <div id = 'applyNow'>

            <div 
                id = 'applyButton'
                onClick = {() => props.clickHandler()}
            >
                APPLY NOW
            </div>
                           
        </div>
        );
}

export default ApplyButton;