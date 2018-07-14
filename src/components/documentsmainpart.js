import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import EachDocumentSection from './eachDocumentSection';
import {documentsFakeApi} from '../fakeAPI/documentsFakeApi';

import '../App.css';

const DocumentsMainPart = ({itemToBeShown}) => 
        <Fragment>
            {
                itemToBeShown.map(
                    (element, index) => {
                        if (element === 1) { 
                            return (
                            <Fragment key = {index}>
                                <EachDocumentSection
                                    header = {documentsFakeApi[index].header}
                                    listofthings = {documentsFakeApi[index].listofthings}  
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