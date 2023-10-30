import { LOGIN_SUCCESS, LOGOUT,ONLOAD } from "../actions/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCookies } from 'react-cookie';
import globalconst from "../constant/globalvariables";


const user = null;
const initialState = user
  ? { isLoggedIn: true, user:user }
  : { isLoggedIn: false, user: null };


 const authReducer= (state = initialState, action) => {
  const { type, payload } = action;
 // const languages=formLanguages(payload);
// alert("auth reducer"+JSON.stringify(state));
switch (type) {
  case ONLOAD:
    return{
      ...state,
      isLoggedIn: payload.user?true:false,
      user: payload.user,  
     // language:{lanIndex:0,workType:"Pending",results:[]}
    };
  case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoggedIn: payload.user?true:false,
    //    languages:languages,
      };
  case LOGOUT:
      return {
        
        isLoggedIn: false,
        user: null,
        
      };
    default:
      return state;
  }
};
export default authReducer