import React, {Component} from 'react';
import euaImage from '../image/eua.jpg';
import '../App.css';

function MainImage(props) {
    return (
        <section id = 'headerContainer'>
        
            <img src = {euaImage} alt = 'European University of Armenia' id = 'euaImage'/>

            <div id = 'headerText'>
                <h1>
                    An investment in knowledge pays the best interest.
                </h1>   
            </div>

            <div id = 'applyNow'>
                <div id = 'applyButton'>APPLY NOW</div>
                </div>
      
        </section>
    );
}

export default MainImage;