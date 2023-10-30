import authReducer from "./auth";
import fetchReducer from "./fetch";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CLEAR_ALL_REDUCERS_DATA ,ONLOAD,LOGIN_SUCCESS,LOGOUT} from "../actions/type";
import languageReducer from "./languages";
import workTypeReducer from "./worktype";

const allReducers = combineReducers({
    auth:authReducer,
    language:languageReducer,
  /*  workType:workTypeReducer,
    fetch:fetchReducer,*/
});
 
 const rootReducer = (state, action) => {
    const { type, payload } = action;
     switch (action.type) {
         case  CLEAR_ALL_REDUCERS_DATA:
             return state = undefined;
        
         default:
             return allReducers(state, action)
     }
 };
 
 export default rootReducer;