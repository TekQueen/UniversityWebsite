import React from 'react';
import '../../App.css';

import Form from '../containers/form';

const ApplyPage = () => {
        
        return (
            <div className = 'br bs animatedText'>
                <div className = 'applyInnerPage'>
                <h2 className = 'formHeader'>Application form for foreign students 2018-2019 academic year</h2>
                
                <div id = 'formContainer'>       
                    <Form />
                </div>
                </div>
            </div>
        );

}

export default ApplyPage;