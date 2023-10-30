//import { applyMiddleware } from "redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import thunk from "redux-thunk";
import allReducers from "./reducers/allReducer";
//import fetchReducer from './reducers/fetch';
//const middleware = [thunk];
//const store = configureStore({reducer:allReducers});
const store = configureStore({
    reducer:allReducers,
   // devTools:    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
);
export default store;