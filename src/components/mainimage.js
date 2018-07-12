import React from 'react';

import euaImage from '../image/eua.jpg';

import ApplyButton from './applyButton';

import '../App.css';

const MainImage =({clickHandler}) => {
    return (
        <section id = 'headerContainer'>
        
            <img 
                src = {euaImage} 
                alt = 'European University of Armenia' 
                className = 'euaImage br bs'
            />

            <div id = 'headerText'>
                <h1>
                ز گهواره تا گور دانش بجوی
                </h1>   
            </div>

           <ApplyButton clickHandler = {clickHandler} />
          
      
        </section>
    );
}

export default MainImage;