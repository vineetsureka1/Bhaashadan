import { LOAD_PARA,LOAD_JOB,INITIALIZE,SETLANGUAGE, SETWORKTYPE } from "./type";
import DataFetchService from "../services/dataFetchService";
import globalconst from "../constant/globalvariables";
export const initialize=(languages)=>(dispatch)=>{
  /*  dispatch({
        type: INITIALIZE,
        payload: languages 
      })
      */
}
/*
export const getJob = (oldState,workType,selectedLanguageIndex) => (dispatch) => {
  return DataFetchService.getJob(oldState,workType,selectedLanguageIndex).then(
    (response) => {
     // alert(JSON.stringify(response));
      if (response.status===200) {
        const user=response.data.user;
        //alert(JSON.stringify(user));
        dispatch({
          type: LOAD_JOB,
          payload: response 
        });
      }
  
        Promise.resolve();
        return response;

      }
    ,
    (error) => {
Promise.reject();

      return error;
    }
  );
};
*/
//export const getParagraph = (workType,selectedLanguageKey) => (dispatch) => {
  export const getParagraph = (argObject) => (dispatch) => {
    return DataFetchService.getParagraph(argObject).then(
      (response) => {
       // alert(JSON.stringify(response));
        
        if (response.status===200) {
        //  const user=response.data.user;
         // alert(JSON.stringify(user));
        // const languages=getLanguages(oldState,workType,selectedLanguageIndex,response);
          dispatch({
            type: LOAD_PARA,
            payload: {data:response.data,selectedLanguage:argObject.selectedLanguage,selectedWorkType:"Pending",alreadyExists:argObject.alreadyExists,nextUrl:response.data.next}
            
          });
        }

          Promise.resolve();
          return response;
  
        }
      ,
      (error) => {
 
 // Promise.reject();
  
        return error;
      }
    );
  };
  export const setSelectedLanguage = (argObject) => (dispatch) => {
    return DataFetchService.getParagraph(argObject).then(
      (response) => {
        
        
        if (response.status===200) {
         // alert(JSON.stringify(response));
        //  const user=response.data.user;
         // alert(JSON.stringify(user));
        // const languages=getLanguages(oldState,workType,selectedLanguageIndex,response);
          dispatch({
            type: SETLANGUAGE,
            payload: {selectedLanguage:argObject.selectedLanguage,selectedWorkType:argObject.selectedWorkType,data:response.data,alreadyExists:argObject.alreadyExists,nextUrl:response.data.next}
          });
        }

          Promise.resolve();
          return response;
  
        }
      ,
      (error) => {
 
  //Promise.reject();
  
        //return error;
      }
    );
  };
  /*
  export const setSelectedLanguage = (argObject) => (dispatch) => {
  dispatch({
    type: SETLANGUAGE,
    payload: {lanIndex:argObject.lanindex,workType:"Pending",results:[]}
  });

}
*/
//export const setWorkType = (argObject) => (dispatch) => {
  export const setWorkType = (argObject) => (dispatch) => {
    return DataFetchService.getParagraph(argObject).then(
      (response) => {
        
        
        if (response.status===200) {
       //   alert(JSON.stringify(response));
        //  const user=response.data.user;
         // alert(JSON.stringify(user));
        // const languages=getLanguages(oldState,workType,selectedLanguageIndex,response);
          dispatch({
            type: SETWORKTYPE,
            payload: {selectedLanguage:argObject.selectedLanguage,selectedWorkType:argObject.selectedWorkType,data:response.data,alreadyExists:argObject.alreadyExists,nextUrl:response.data.next}
          });
        }

          Promise.resolve();
          return response;
  
        }
      ,
      (error) => {
 
  //Promise.reject();
  
        return error;
      }
    );
  };


