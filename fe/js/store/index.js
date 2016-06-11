import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import reducers from './reducers';

module.exports = applyMiddleware(thunk)(createStore)(combineReducers(reducers), initialState);
