import { SETLANGUAGE, SETWORKTYPE,ONLOAD,LOAD_PARA ,LOGIN_SUCCESS} from "../actions/type";
import fetchReducer from "./fetch";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import languageReducer from "./languages";

//const user = null;
//const initialState={lanIndex:0,workType:"Pending",results:[]}
 const dataReducer= (state, action) => {
  const { type, payload } = action;
 // alert(type+"state in worktype reducer "+JSON.stringify(state)); 
 /*if(payload && payload.data)
  alert(type+" work type payload next url"+payload.data.next+" prev state "+JSON.stringify(payload));
else
  alert(type+" work type payload data not exist"); */
switch (type) {
  case SETLANGUAGE:
      return{
        ...state,
       // selectedLanguage:payload.selectedLanguage,
       // selectedWorkType:payload.selectedWorkType,
       selectedObject:payload.alreadyExists?
                      {...state.selectedObject,
                        results:[...new Set(state.selectedObject.results,payload.data.results)],
                        prevUrl:payload.data.previous,
                        nextUrl:payload.data.next 
                        }:{...state.selectedObject},
      };
    case SETWORKTYPE:
      return{
        ...state,
      //  selectedLanguage:payload.selectedLanguage,
      selectedObject:payload.alreadyExists?{...state.selectedObject,
        results:[...new Set(state.selectedObject.results,payload.data.results)],
        prevUrl:payload.data.previous,
        nextUrl:payload.data.next 
                  }:{...state.selectedObject},
        
      }
     /* case LOAD_PARA:
      return{
        ...state,
        listOfObject:[...state.listOfObject.filter((obj)=>(!(obj.selectedLanguage.key==state.selectedLanguage.key && obj.selectedWorkType==state.selectedWorkType)))
          ,state.selectedObject]
      }
      */
    
      case LOAD_PARA:
        return{
          ...state,
          selectedObject:payload.alreadyExists?{...state.selectedObject,
            results:[...new Set(state.selectedObject.results,payload.data.results)],
           // prevUrl:payload.data.previous,
           // nextUrl:payload.data.next 
                      }:{...state.selectedObject,results:[...new Set(payload.data.results)]},
                          
          }
    case LOGIN_SUCCESS:
    return {
             ...state,
            listOfObject:[state.selectedObject],
      }
    default:
      return state;
  }
  };


function workTypeReducer(state, action) {
    const intermediateState =dataReducer(state, action)
    const finalState =fetchReducer(intermediateState, action)
    return finalState
  }



export default workTypeReducer

