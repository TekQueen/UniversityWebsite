import React, { Component } from 'react';

import Header from './components/header';
import MainImage from './components/mainimage';
import AboutUs from './components/aboutus';
import Footer from './components/footer';
import Documents from './components/documents';
import ApplyPage from './components/applyPage';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }

    this.applyButtonClicked = this.applyButtonClicked.bind(this);
  }


  applyButtonClicked() {
    this.setState(
        (prevState, props) => {
           return { checked: !prevState.checked }
        }
    );

    console.log(this.state.checked);
  }


  render() {

    /*<ApplyPage 
    clickHandler = {this.applyButtonClicked}
    className = {(this.state.checked ? 'applyBox' : 'HiddenApplyBox')} 
    />*/
   
    return (
      <React.Fragment>

        <Header 
          aboutUsId ='aboutUsSection' 
          documentsId = 'documentsSection'
        />
        
        <MainImage clickHandler = {this.applyButtonClicked} />

        <AboutUs />

        <Footer />
  
      </React.Fragment>
    );
  }
}

export default App;
