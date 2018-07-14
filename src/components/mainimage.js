import React from 'react';

import euaImage from '../image/eua.jpg';

import ApplyButton from './applyButton';

import '../App.css';

const MainImage =({clickHandler}) => {
    return (
        <section id = 'headerContainer'>

            <figure>
                <img 
                    src = {euaImage} 
                    alt = 'European University of Armenia' 
                    className = 'euaImage br bs'
                />
            </figure>

            <div id = 'headerText'>
                <p>
                ز گهواره تا گور دانش بجوی
                </p>   
            </div>

           <ApplyButton clickHandler = {clickHandler} />
          
      
        </section>
    );
}

export default MainImage;