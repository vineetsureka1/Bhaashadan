import { SETLANGUAGE,ONLOAD,LOGIN_SUCCESS, LOAD_PARA, SETWORKTYPE } from "../actions/type";
import fetchReducer from "./fetch";
import workTypeReducer from "./worktype";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//const user = null;

const initialState={selectedWorkType:"Pending"}
 const dataReducer= (state=initialState, action) => {
  const { type, payload } = action;
  //alert(type+" state in language reducer "+JSON.stringify(state));
 /* if(payload )
  alert(type+" language payload next url"+JSON.stringify(payload)+" prev state ");//+state.selectedObject.nextUrl);
else
  alert(type+" language payload data not exist");
*/
switch (type) {
  case SETLANGUAGE:
      return{
        ...state,
        selectedLanguage:payload.selectedLanguage,
       // selectedWorkType:payload.selectedWorkType,
        selectedObject:payload.alreadyExists?
        [...state.listOfObject.filter((obj)=>(obj.selectedLanguage.key==payload.selectedLanguage.key && obj.selectedWorkType==payload.selectedWorkType))].reduce((obj1, item) => (obj1[item.key] = item.value, obj1) ,{})
                       :{selectedLanguage:payload.selectedLanguage,
                        selectedWorkType:payload.selectedWorkType,
                        results:payload.data.results,
                        prevUrl:payload.data.previous,
                       nextUrl:payload.data.next    
                      },
      };
    case SETWORKTYPE:
      return{
        ...state,
      //  selectedLanguage:payload.selectedLanguage,
        selectedWorkType:payload.selectedWorkType,
        selectedObject:payload.alreadyExists?
        [...state.listOfObject.filter((obj)=>(obj.selectedLanguage.key==payload.selectedLanguage.key && obj.selectedWorkType==payload.selectedWorkType))].reduce((obj1, item) => (obj1[item.key] = item.value, obj1) ,{})
                       :{selectedLanguage:payload.selectedLanguage,
                        selectedWorkType:payload.selectedWorkType,
                        results:payload.data.results,
                        prevUrl:payload.data.previous,
                       nextUrl:payload.data.next 
                      },
        
      }
    case LOAD_PARA:
      return{
        ...state,
        selectedObject:{
                        ...state.selectedObject,
                       // selectedLanguage:state.selectedLanguage,
                       // selectedWorkType:state.selectedWorkType,
                       // results:[...payload.data.results],
                       // results:[payload.data.results],
                        prevUrl:payload.data.previous,
                        nextUrl:payload.data.next
                        }
                        
       //selectedObject:{...state.selectedObject,results:['a','b','c']}
      }
    case LOGIN_SUCCESS:
                  return {
                    ...state,
                    selectedLanguage:payload.user.languages[0],
                    selectedWorkType:"Pending",
                    selectedObject:{selectedLanguage:payload.user.languages[0],selectedWorkType:"Pending",results:[],
                    prevUrl:null,
                    nextUrl:payload.data.next
                  },
                    
                  }
    default:
      return state;
  }
  /*case ONLOAD:
    return{
      ...state,
      selectedObject:{languageIndex:state.selectedLanguage},
      trialObject:{[state.selectedLanguage]:""},
     // language:{lanIndex:0,workType:"Pending",results:[]}
    };*/
    /*
    case LOAD_PARA:
                return{
                  ...state,
                 trialObject:{[state.selectedLanguage.key]:{[state.selectedWorkType]:{results:payload.results}}}
                 //trialObject:{[state.selectedLanguage.key]:{[state.selectedWorkType]:{results:[...new Set(state.trialObject[state.selectedLanguage.key][state.selectedWorkType].results,...payload.results)]}}}
                }
    case ONLOAD:
                return{
                  ...state,
               //   isLoggedIn: payload.user?true:false,
                //  user: payload.user,  
                  selectedLanguage:(payload.user && payload.user.languages)?payload.user.languages[0]:{},
                  selectedWorkType:"Pending",
                 
                  //finalObject:{...state.finalObject,[payload.user.languages[0]]:{[state.selectedWorkType]:{results:[]}}}
                  
                  
                };
        case LOGIN_SUCCESS:
                  return {
                    ...state,
                //    isLoggedIn: true,
                //    user: payload.user,
                    selectedLanguage:payload.user.languages[0],
                    selectedWorkType:"Pending",
                    //trialObject:(payload.user && payload.user.languages)?{[payload.user.languages[0].key]:{[state.selectedWorkType]:{results:[]}}}:{},
                    trialObject:{[payload.user.languages[0].key]:{"Pending":{results:payload.results}}}
                  
                //    languages:languages,
                  };
  case SETLANGUAGE:
    
    return{
      ...state, 
     // languageList:[...state.languageList.filter((lan)=>(!(lan.languageIndex==state.selectedLanguage && lan.workType==state.selectedWorkType) ))],
    //  languageList:[...state.languageList.filter((lan)=>(!(lan.languageIndex==payload.selectedLanguage && lan.workType==payload.selectedWorkType) ))],
      selectedLanguage:payload.selectedLanguage,
      //selectedWorkType:payload.selectedWorkType,
     // selectedObject:{languageIndex:payload.selectedLanguage},
      trialObject:(state.finalObject[payload.selectedLanguage.key] && state.finalObject[payload.selectedLanguage.key][state.selectedWorkType])?state.finalObject[payload.selectedLanguage.key][state.selectedWorkType]:{[payload.selectedLanguage.key]:{[state.selectedWorkType]:{results:[]}}},

    };
    */
    
};

function languageReducer(state, action) {
    const intermediateState = dataReducer(state, action)
    const finalState = workTypeReducer(intermediateState, action)
    return finalState
  }
  
export default languageReducer

