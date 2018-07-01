import React, {Component} from 'react';
import '../App.css';

class ApplyPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            

                <div className = 'applicationForm animate'>
                    <p
                        className = 'closeButtonContainer' 
                        onClick = {() => this.props.clickHandler()}
                    >
                        &times;
                    </p> 

                    <h1> Application Form </h1>

                    <form>
                        <input 
                            className = 'applicationInput'
                            type = 'text' 
                            placeholder = 'First Name...'
                        />

                        <input 
                            className = 'applicationInput'
                            type = 'text' 
                            placeholder = 'Last Name...'
                        />

                        <input 
                            className = 'applicationInput'
                            type = 'text' 
                            placeholder = 'Middle Name...'
                        />

                        <div className = 'stepContainer'>
                            <span className = 'step'></span>
                            <span className = 'step'></span>
                            <span className = 'step'></span>
                            <span className = 'step'></span>
                        </div>
                    </form>

                  
                </div>

            
        );
    }

}

export default ApplyPage;