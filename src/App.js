import React, { Component } from 'react';

import Header from './components/header';
import MainImage from './components/mainheader';
import AboutUs from './components/aboutus';
import Footer from './components/footer';
import Documents from './components/documents';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id = 'reactBody'>

        <Header 
          aboutUsId ='aboutUsSection' 
          documentsId = 'documentsSection'
        />
        
        <MainImage />
   
        <AboutUs />

        <Documents />

        <Footer />
  
      </div>
    );
  }
}

export default App;
