import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// NEW StuFF DANE MADE
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const storeInstance = createStore(
    () => {
        console.log('Hey im a reducer in the store');
    }
);






ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
