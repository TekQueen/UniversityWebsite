import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import EachDocumentSection from './eachDocumentSection';

// language 
import {documents} from '../../languagesFile/persian'


const DocumentsMainPart = ({itemToBeShown}) => 
        <Fragment>
            {
                itemToBeShown.map(
                    (element, index) => {
                        if (element === 1) { 
                            return (
                            <Fragment key = {index}>
                                <EachDocumentSection
                                    header = {documents[index].header}
                                    listofthings = {documents[index].listofthings}  
                                />
                            <EachDocumentSection
                                isRed =  {true}
                                header = 'مدارکی که باید در کشور ارمنستان تهیه شود'
                                listofthings = {[
                                `ترجمه پاسپورت به زبان ارمنی`,
                                `گواهی سلامت`,
                                ]}
                            />
                            </Fragment>);
                        } else {
                            return null;
                        } 
                    }
                )            
            }
            
        </Fragment>

DocumentsMainPart.propTypes = {
    itemToBeShown: PropTypes.array,
}

export default DocumentsMainPart;