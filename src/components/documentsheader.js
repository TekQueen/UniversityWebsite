import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const DocumentsHeader  = ({documentItems, itemClicked}) =>   
            <div className = 'documentItemsMenue'>
                {
                    documentItems.map(
                        (element, index) => 
                            <div
                                className = 'documentItems'
                                key = {index}
                                onClick = {() => itemClicked(index)}
                            >
                                {element}
                            </div>
                    )
                }
            </div>
        
DocumentsHeader.proptypes = {
    documentItems: PropTypes.array,
    itemClicked: PropTypes.func
}
export default DocumentsHeader;