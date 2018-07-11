import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import {Provider} from 'react-redux';
import {onDocumentItemClicked} from './reducers/reducers';
import {onInputChange, onItemChecked} from './form/reducers/reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const rootReducer = combineReducers({onDocumentItemClicked, onInputChange, onItemChecked});
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
