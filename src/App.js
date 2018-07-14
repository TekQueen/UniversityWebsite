import React, {Fragment} from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import DynamicImport from './containers/dynamicimport';

const HomePage = (props) => (
  <DynamicImport load = { () => import('./components/homepage')}>
    {
      Component => Component === null ?
      <Fragment>Loading</Fragment> :
      <Component {...props} />
    }
  </DynamicImport>
)

const Documents = (props) => (
  <DynamicImport load = { () => import('./containers/documents')}>
    {
      Component => Component === null ?
      <Fragment>Loading</Fragment> : 
      <Component {...props} />
    }
  </DynamicImport>
)

const ApplyPage = (props) => (
  <DynamicImport load = { () => import('./form/components/applyPage')}>
  {
    Component => Component === null ?
    <Fragment>Loading</Fragment> : 
    <Component {...props} />
  }
</DynamicImport>
)

const Majors = (props) => (
  <DynamicImport load = { () => import('./components/majors')}>
  {
    Component => Component === null ?
    <Fragment>Loading</Fragment> : 
    <Component {...props} />
  }
</DynamicImport>
)

const App = () => {
    return (
        <BrowserRouter>

          <Fragment>
            <Header />

              <Switch>
                <Route path = '/' component = {HomePage} exact />
                <Route path = '/documents' component = {Documents} />
                <Route path = '/apply' component = {ApplyPage} />
                <Route path = '/majors' component = {Majors} />
              </Switch>

            <Footer />
          </Fragment>

        </BrowserRouter>
    );
}

export default App;