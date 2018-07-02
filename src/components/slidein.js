import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

function SlideIn(props) {
    return(
        <div className = 'slideInContainer'>

            <div className = 'slideInMain'> 
             <div>مدارک مورو نیاز برای ثبت نام در دوره پیش دانشگاهی و دوره زبان
            </div></div>

            <div className = 'slideOverlay'>
                <div className = 'slideInText'>
                لاس دوازدهم (دیپلم، سوم دبیرستان قدیم مدرک نهایی) 

ریز نمرات کلاس دوازدهم (دیپلم، سوم دبیرستان قدیم مدرک نهایی) 

شناسنامه

قطعه عکس سه در چهار 
                </div>
            </div>
            
        </div>
    );
}

export default SlideIn;