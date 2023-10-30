//import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { login } from "../actions/auth";
import { useCookies } from 'react-cookie';
import globalconst from "../constant/globalvariables";
    //alert("input username="+values['username']);
    	// let self=props;
         // alert(error.response.status);
                    //    console.log("response aauthservice "+response);
      //  Promise.resolve(response);
     // response.data.status=response.status;
     //alert(values['username']);
  //alert(values['password']);
  //alert(values['rememberMe']);
  //alert(endpoint);
  //alert("username:" +values['username']+"password:"+ values['password']);
  //alert(" rememberMe"+rememberMe);
  //alert("output username="+user.first_name);
const logIn = async (values) => {
  var errorMsg=null;
  const endpoint ='api/auth/';
  const payload = { username: values['username'], password: values['password'] } ;
  axios.defaults.baseURL = globalconst.apiBaseUrl;
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  const rememberMe=values['rememberMe'];
    return axios({
        method: 'post',
        url: endpoint,
        data: payload
      })  
      .then(function (response) { 
        const { token,user} = response.data;
        axios.defaults.headers.common.Authorization = `Token ${token}`;
		    const lan = user.language.split(',');
          user.languages=[];
          for(var i=0;i<lan.length;i++){
            var newLan={};
            var newKey=lan[i];
            if(lan[i]=="bengali")
            newKey="bangla"
            newLan.key=newKey;
            newLan.item=newKey.charAt(0).toUpperCase() + newKey.substr(1).toLowerCase();
            user.languages.push(newLan);
          }
       return response;
    })
      .catch(function (error) {
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
const logOut = async () => {
  
  return {
    status: "success",
    message: "You are logged out",
  };
};

const onLoad = async () => {
  const [cookies, setCookie] = useCookies(['bhaashadan']);
  //alert("authservice called"+JSON.stringify(cookies));
  if(cookies && cookies.bhaashadan && cookies.bhaashadan.token)
  axios.defaults.headers.common.Authorization=cookies.bhaashadan.token;
  return cookies;

};

export default {
  logIn,
  logOut,
  onLoad,
};