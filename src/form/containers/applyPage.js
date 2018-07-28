import React, {Component} from 'react';
import '../../App.css';

import Form from './form';

class ApplyPage extends Component {
    render() {
        return (
            <section className = 'br bs animatedText'>
                <section className = 'applyInnerPage'>
                      <Form />  
                </section>
            </section>
           
        );
    }
}

export default ApplyPage;