import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    createStore,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import {onDocumentItemClicked} from './reducers/reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(onDocumentItemClicked, applyMiddleware(logger));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
