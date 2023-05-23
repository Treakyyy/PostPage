import {createStore, combineReducers, applyMiddleware} from 'redux';
import { customerReducer } from './customerReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import { commentReducer } from './commentReducer';

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
    customers: customerReducer,
    comment: commentReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootWatcher)