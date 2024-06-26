import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from './components/App';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import {thunk} from 'redux-thunk';

const store=createStore(reducers,{},applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));

console.log('STRIPE KEY IS',process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is',process.env.NODE_ENV);
