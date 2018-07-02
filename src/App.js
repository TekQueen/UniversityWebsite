import React from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import HomePage from './components/homepage';
import Documents from './components/documents';
import Header from './components/header';
import Footer from './components/footer';
import ApplyPage from './components/applyPage';

import './App.css';

function App(props) {
    return (
        <BrowserRouter>

          <div>
            <Header />

              <Switch>
                <Route path = '/' component = {HomePage} exact />
                <Route path = '/documents' component = {Documents} />
                <Route path = '/apply' component = {ApplyPage} />
              </Switch>

            <Footer />
          </div>

        </BrowserRouter>
    );
}

export default App;