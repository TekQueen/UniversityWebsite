import React, {Component} from 'react';

import eua from '../imgs/eua.jpg';
import euaLibrary from '../imgs/euaLibrary.jpg';
import euaImage from '../../image/eua.jpg';

import MainImage from '../../components/mainimage';
import Slide from '../components/slide';
import EachSlider from '../components/eachSlider';

class SlideShow extends Component {
    state = {
        slideToBeShown: 1
    }

    handleSlider = (slideToBeShown, event) => {
        this.setState({slideToBeShown});
    } 

    render() {
        let { slideToBeShown } = this.state;
        {
            if (slideToBeShown === 1) {
                return ( 
                    <EachSlider  handleSlider = {this.handleSlider} >
                        <MainImage 
                            src = {euaImage}
                        />
                    </EachSlider>
                )
            } else if ( slideToBeShown === 2) {
                return (
                    <EachSlider  handleSlider = {this.handleSlider} >
                        <Slide src = {euaLibrary} />
                    </EachSlider>
                )
            } else if (slideToBeShown === 3) {
                return (
                    <EachSlider  handleSlider = {this.handleSlider} >
                        <Slide src = {eua} />
                    </EachSlider>
                )
            }
        }
    }
}
    


export default SlideShow;