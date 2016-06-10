import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import heroes from './reducers/heroes';
import battlefield from './reducers/battlefield';
import initialState from './initialstate';

const rootReducer = combineReducers({heroes, battlefield});

module.exports = applyMiddleware(thunk)(createStore)(rootReducer, initialState());
