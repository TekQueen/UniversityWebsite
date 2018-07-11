import React from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import HomePage from './components/homepage';
import Documents from './containers/documents';
import Header from './components/header';
import Footer from './components/footer';
import ApplyPage from './form/components/applyPage';
import Majors from './components/majors';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>

          <div>
            <Header />

              <Switch>
                <Route path = '/' component = {HomePage} exact />
                <Route path = '/documents' component = {Documents} />
                <Route path = '/apply' component = {ApplyPage} />
                <Route path = '/majors' component = {Majors} />
              </Switch>

            <Footer />
          </div>

        </BrowserRouter>
    );
}

export default App;