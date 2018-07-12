import React from 'react';
import PropTypes from 'prop-types';

import ListOfThings from './listofthings';
import MiniImage from './miniImage';

import '../App.css';

const ListOfThingsBox = ({sectionHeader, imgSrc, imgAlt, listofthings}) => 
        <div>
        
            <h3 className = 'sectionHeader'>{sectionHeader}</h3>

                <div 
                className = {(imgSrc) ?  'aboutUs' : null}
                >

                {
                    ((imgSrc) ? 
                        <MiniImage 
                            imgSrc = {imgSrc}
                            imgAlt = {imgAlt}
                        />
                        : null
                    )
                }

                <ListOfThings 
                    listofthings = {listofthings}
                />
            </div>
        </div>
  
ListOfThingsBox.propTypes = {
    sectionHeader: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    listofthings: PropTypes.array
}

export default ListOfThingsBox;