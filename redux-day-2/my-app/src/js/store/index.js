import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
// import counterReducer from '../reduceres/root-reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
