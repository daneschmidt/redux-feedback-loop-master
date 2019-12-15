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

const inputReducer = (state = stockFeedback, action) => {
    if (action.type === 'ENTER_FEELING') {
        return {
            ...state,
            ...action.payload,
        }
    } else if (action.type === 'ENTER_UNDERSTANDING') {
        return {
            ...state,
            ...action.payload,
        }
    } else if (action.type === 'ENTER_SUPPORT') {
        return {
            ...state,
            ...action.payload,
        }
    } else if (action.type === 'ENTER_COMMENTS') {
        return {
            ...state,
            ...action.payload,
        }
    }
    return state;
}
const feedbackReducer = (state = { stockFeedback }, action) => {
    // console.log('What up im the feedback reducer!', state);
    return state;
};


const storeInstance = createStore(
    combineReducers({ feedbackReducer, inputReducer }));


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
