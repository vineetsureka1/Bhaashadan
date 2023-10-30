//import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { login } from "../actions/auth";
import { useCookies } from 'react-cookie';
import globalconst from "../constant/globalvariables";

const getParagraph = async (argObject) => {
//alert("called");
	// let self=props;
  //alert("url "+JSON.stringify(argObject));
  var apiURL=globalconst.apiBaseUrl+"/api/"+(argObject.selectedWorkType=="Pending"?"paragraph":"job")+"?language="+argObject.selectedLanguage.key+"&page=1";
  if(argObject && argObject.nextUrl && argObject.nextUrl!=undefined)
    apiURL=argObject.nextUrl;
//alert("final url"+argObject.nextUrl);
axios.defaults.headers.get['Content-Type'] ='application/json';
//alert("url"+apiURL)
//alert("token "+axios.defaults.headers.common.Authorization+" content type: "+axios.defaults.headers.get['Content-Type'] );

var myheaders = new Headers();
myheaders.append("Authorization","Token ${token}");
myheaders.append('Content-Type', 'application/json');

    return axios({
        method: 'GET',
       //headers: myheaders,
        url: apiURL,
        redirect: 'follow'
        //data: payload
      })
      .then(function (response) {
       // const languages=getLanguages(oldState,workType,selectedLanguageIndex,response);
      //  response.languages=languages;
     /// alert("getpara service"+JSON.stringify(response));
       return response;  
      })
      .catch(function (error) {
       // alert(error.response.status);
      // alert("getpara service error"+JSON.stringify(error));
        if(error.response.data.non_field_errors!=null)
        {
        alert("API call fails with error:"+error.response.data.non_field_errors);
        console.log(error.response.data.non_field_errors);
        }
        else{
        alert("API call fails with error:"+error);
        console.log(error);
        }
        return error;
        
      });
      
}
/*
function getLanguages(oldState,workType,selectedLanguageIndex,response){
  var languages=[...oldState.languages];
  languages[selectedLanguageIndex][workType].items=[languages[selectedLanguageIndex][workType].items,response.data.results]
  return languages;
}
*/

export default {
  getParagraph,
  //getJob,
  
};