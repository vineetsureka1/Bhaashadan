import { CLEAR_ALL_REDUCERS_DATA } from "./type";

export const clearAllStoreData=(languages)=>(dispatch)=>{
    
        dispatch({
            type: CLEAR_ALL_REDUCERS_DATA,
           // payload: languages 
          })
    };