import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const DocumentsHeader  = ({documentItems, itemClicked}) =>   
            <nav className = 'documentItemsMenue'>
                {
                    documentItems.map(
                        (element, index) => 
                            <Fragment
                                key = {index}                            
                            >
                                <section
                                    onClick = {() => itemClicked(index)}
                                    className = 'documentItems'
                                >
                                    {element}
                                </section>
                            </Fragment>
                    )
                }
            </nav>
        
DocumentsHeader.propTypes = {
    documentItems: PropTypes.array,
    itemClicked: PropTypes.func
}
export default DocumentsHeader;