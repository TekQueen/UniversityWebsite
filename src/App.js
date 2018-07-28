import React, {Fragment} from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';

import Header from './header/components/header';
import Footer from './footer/components/footer';
import DynamicImport from './containers/dynamicimport';

// languages 
import {
  header,
  footer,
  majors,
  documentsTitle,
  aboutus
} from './languagesFile/persian';


const HomePage = (props) => (
  <DynamicImport load = { () => import('./homepage/components/homepage')}>
    {
      Component => Component === null ?
      <Fragment>Loading</Fragment> :
      <Component 
        aboutusHeader = {aboutus[0].aboutUsHeader}
        longTexes = {aboutus[1]}
        listOfThingsBox = {aboutus[2]}
        {...props} 
      />
    }
  </DynamicImport>
)

const Documents = (props) => (
  <DynamicImport load = { () => import('./documents/containers/documents')}>
    {
      Component => Component === null ?
      <Fragment>Loading</Fragment> : 
      <Component {...props} 
        titles = {documentsTitle}
      />
    }
  </DynamicImport>
)

const ApplyPage = (props) => (
  <DynamicImport load = { () => import('./form/containers/applyPage')}>
  {
    Component => Component === null ?
    <Fragment>Loading</Fragment> : 
    <Component {...props} />
  }
</DynamicImport>
)

const Majors = (props) => (
  <DynamicImport load = { () => import('./majors/components/majors')}>
  {
    Component => Component === null ?
    <Fragment>Loading</Fragment> : 
    <Component 
      header  = {majors[0].header}
      majorSectionArr = {majors[1]}
      {...props} 
    />
  }
</DynamicImport>
)

const TutionAndDeadline = (props) => (
  <DynamicImport load = { () => import('./tutionAndDeadLine/components/tutioanAndDeadline')}>
  {
    Component => Component === null ?
    <Fragment>Loading</Fragment> : 
    <Component {...props} 
    />
  }
</DynamicImport>
)

const App = () => {
    return (
        <BrowserRouter>

          <Fragment>
            <Header 
              navArray = {header}
            />

              <Switch>
                <Route path = '/' component = {HomePage} exact />
                <Route path = '/documents' component = {Documents} />
                <Route path = '/apply' component = {ApplyPage} />
                <Route path = '/majors' component = {Majors} />
                <Route path = '/tuitionAndDeadline' component = {TutionAndDeadline} />
              </Switch>

            <Footer 
              footerContentArr = {footer[0]}
              footerLinksArr = {footer[1]}
            />
          </Fragment>

        </BrowserRouter>
    );
}

export default App;