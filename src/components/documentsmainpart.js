import React from 'react';
import PropTypes from 'prop-types';

import EachDocumentSection from './eachDocumentSection';
import {documentsFakeApi} from '../fakeAPI/documentsFakeApi';

import '../App.css';

const DocumentsMainPart = ({itemToBeShown}) => 
        <div>
            {
                  itemToBeShown.map(
                    (element, index) => {
                        if (element === 1) { 
                            return (
                            <EachDocumentSection
                                key = {index}
                                header = {documentsFakeApi[index].header}
                                listofthings = {documentsFakeApi[index].listofthings}  
                            />);
                        } else {
                            return null;
                        } 
                    }
                )            
            }
            
        </div>

DocumentsMainPart.propTypes = {
    itemToBeShown: PropTypes.array,
}

export default DocumentsMainPart;