import { LOGIN_SUCCESS, LOGOUT,ONLOAD,INITIALIZE, LOAD_PARA } from "./type";
import AuthService from "../services/authService";
import dataFetchService from "../services/dataFetchService";
import globalconst from "../constant/globalvariables";
import { initialize,getParagraph } from "./fetch";
/*
export const login = (user) => () => {
  return function (dispatch){
    AuthService.logIn(user).then(
      (response) => {
        
        alert(JSON.stringify(response));
        if (response.status===200) {
          localStorage.setItem('userToken', axios.defaults.headers.common.Authorization)
          const user=response.data.user;
          alert(JSON.stringify(user));
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {user:response.data.user }
  
          })
  
         dispatch(getParagraph({selectedLanguageKey:response.data.user.languages[0].key,workType:"Pending"}));
          
  
        }
  
          Promise.resolve();
          return response
  
        }
      ,
      (error) => {
  
  Promise.reject();
  
        return error;
      }
    );
  }
}
*/
export const login = (user) => (dispatch) => {
   
  return AuthService.logIn(user).then(
    (response) => {
    //  const apiURL=globalconst.apiBaseUrl+"/api/paragraph"+"?language="+response.data.user.languages[0].key+"&page=1";
     // alert("login service"+JSON.stringify(response));
 
        return new Promise(function(res, rej){
          
          if(response.status==200){
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {user:response.data.user,data:{next:null} }
    
            });
          res(dataFetchService.getParagraph({selectedLanguage:response.data.user.languages[0],selectedWorkType:"Pending"}));
          }
         // else
          //  rej({loginResponse:response,paraResponse:"Not called"});
      }).then((paraResponse) =>  {
       // alert("paraResponse"+paraResponse);
        dispatch({
        type: LOAD_PARA,
        payload: {selectedLanguage:response.data.user.languages[0],selectedWorkType:"Pending",data:paraResponse.data,alreadyExists:false,
        nextUrl:paraResponse.data.next}

      })
    return {loginResponse:response,paraResponse:paraResponse}
    }
    
    ).catch((error)=>{
      return {loginResponse:{data:{user:response.bhaashadan.user}},paraResponse:error};
    })
  
}
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      
      dispatch({
        type: LOGOUT,
        payload:{user:null}
      });
      
      Promise.resolve();
      return response;
    }
  });
};

export const onLoad = (user) => (dispatch) => {
  return  AuthService.onLoad(user).then((response) => {
   // let userObj=response;
    return new Promise(function(resolvefn, rejectfn){
      //alert("resolvefn"+JSON.stringify(resolvefn)+ " rejectfn "+JSON.stringify(rejectfn));
     // if(response && response.bhaashadan )
     
     if(response && response.bhaashadan && response.bhaashadan.user)
      {
        //const apiURL=globalconst.apiBaseUrl+"/api/paragraph"+"?language="+response.bhaashadan.user.languages[0].key+"&page=1";
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {user:response.bhaashadan.user,data:{next:null}}

      });
    //  if(resolvefn)
    //const apiURL=globalconst.apiBaseUrl+"/api/paragraph"+"?language="+response.bhaashadan.user.languages[0].key+"&page=1";
     resolvefn(dataFetchService.getParagraph({selectedLanguage:response.bhaashadan.user.languages[0],selectedWorkType:"Pending"}));
      }
     //else
      //return {loginResponse:{data:{user:response.bhaashadan.user}},paraResponse:"not called"}
  }).then((paraResponse) =>  {
    //alert("paraResponse"+paraResponse);
    dispatch({
    type: LOAD_PARA,
    payload: {selectedLanguage:response.bhaashadan.user.languages[0],selectedWorkType:"Pending",data:paraResponse.data,alreadyExists:false,
    nextUrl:paraResponse.data.next }

  })
return {loginResponse:{data:{user:response.bhaashadan.user}},paraResponse:paraResponse}
}).catch(error=>{
  return error;
}

)



  });
};

