import {createStore, applyMiddleware} from 'redux';
import {data_load} from '../middleware/index';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
		rootReducer,
		applyMiddleware(data_load)
);

export default store;