import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// NEW StuFF DANE MADE
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const stockFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
};

const feedbackReducer = (state={ stockFeedback }, action) => {
    console.log('What up im the feedback reducer!', state);
    return state;
};

const storeInstance = createStore(
   combineReducers({feedbackReducer})
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
