import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './Reducers/MainReducer';
import {createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import watchLogin from './Actions/SagaResponse';
const SagaMiddleware=createSagaMiddleware();
const store = createStore(Reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(watchLogin);
ReactDOM.render( <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
