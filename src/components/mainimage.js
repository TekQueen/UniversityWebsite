import React from 'react';

import ApplyButton from './applyButton';

import '../App.css';

const MainImage =({clickHandler, src}) => {
    return (
        <section className = 'headerContainer'>

            <figure>
                <img 
                    src = {src} 
                    alt = 'دانشگاه اروپایی ارمنستان' 
                    className = 'euaImage br bs'
                />
            </figure>

            <div className = 'headerText'>
                <p>
                دانشگاه اروپایی ارمنستان
                </p>   
            </div>

           <ApplyButton clickHandler = {clickHandler} />
           
        </section>
    );
}

export default MainImage;