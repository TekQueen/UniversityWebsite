import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class  SlideIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
        }

        this.slideInClicked = this.slideInClicked.bind(this);
    }

    slideInClicked() {
        this.setState( (prevState) => {
            return {isChecked: !prevState.isChecked}
        });
        console.log(this.state.isChecked);
    }

    render() {
        let documentsArray = this.props.documentsArray;

        documentsArray = documentsArray.map(
            (element, index) => 
        
                     <p 
                        className = 'slideInText'
                        key = {index}
                     >
                        {element}
                    </p>
            
        );
        
        return(
            <div className = 'slideInContainer'>

                <div 
                    className = 'slideInMain'
                    onClick = {this.slideInClicked}
                > 
                    <div>
                        {this.props.mainText}
                    </div>
                </div>

                {(this.state.isChecked ? 
                    <div 
                    className = 'slideOverlay'
                    onClick = {this.slideInClicked}
                    >
                        {documentsArray} 
                    </div>: null )}
                
                
            </div>
        );
    }
}

export default SlideIn;