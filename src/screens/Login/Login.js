import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { Formik,Form } from "formik";
import { View, Text, StyleSheet, TextInput, Button,Image } from "react-native";
import { login } from "./../../actions/auth";

import { Checkbox,ConfigProvider  } from "antd"
import axios from "axios";


//import DatePicker from 'react-native-datepicker';
import dayjs from 'dayjs';
import { Formik, Field, Form,useFormikContext,useField} from "formik";

import styles from "../../constant/GlobalStyles";
import Colors from "../../constant/color";
import globalconst from '../../constant/globalvariables';

import CustomInput from "../../customComponent/CustomInput"
import { useCookies } from 'react-cookie';

import * as yup from 'yup';
import { getParagraph, initialize } from "../../actions/fetch";



const Login = (props) => {
  const { navigation }=props;
  const [cookies, setCookie] = useCookies(['bhaashadan']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const dispatchPara=useDispatch();

  
var propsSourceObject;
var greetings="Hello, Friends!"; 
var message="Fill up information and start journey with us"; 
var propUsername="";
var isForgotPasswordVisible=false;

  const formValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required('  Username is required'),
    password: yup
      .string()
      .min(8, ({ min, value }) => `${min - value.length} characters to go`)
      .required('  Password is required'),
    })



const onLogin = (user) => {
   /* let user = {
      username: username,
      password: password,
    };*/
    let userObj=user;
dispatch(login(user))
      .then
      ((response) => {
      //  alert("response of login"+JSON.stringify(response))
        if (response.loginResponse.status===200 && response.paraResponse.status==200)
         {
         // alert("rememberme "+userObj.rememberMe)
         if(userObj.rememberMe){
          var bhaashadanObject={};
          bhaashadanObject.user=response.loginResponse.data.user;
          bhaashadanObject.token=axios.defaults.headers.common.Authorization;
          setCookie('bhaashadan',JSON.stringify(bhaashadanObject),{path:'/',expires:new Date(dayjs( Date.now()).add(30,'day').format("YYYY-MM-DD"))})
          }
         // dispatchPara(getParagraph()).then((response1)=>{
            navigation.replace("UserDashboard");
        //  })
        }
       else{
          //dispatchPara(getParagraph());
         // alert("index error response"+JSON.stringify(response));
        navigation.replace("Login");
        }
      })
      .catch((error) => {
      // alert("index error"+JSON.stringify(error));
        navigation.replace("Login");
      });
      
  };
return (
  <View style={styles.loginContainer}> 
  <View style={{flex:2,backgroundColor:Colors.HomeColor}}>
      <View style={{flexDirection:'column'}}>
      <Image style={styles.logo} source={require("../../assets/iiitnew.png")} />
          <br/>
          <View style={{width:'80%',alignSelf:'center'}}>
             <center> <Text style={styles.loginHeaderText}>Login</Text></center>
             <Formik
          initialValues={{
            username: '',
            password: '',
            rememberMe:false,
            
            
          }}
          validationSchema={formValidationSchema}
          onSubmit={values => onLogin(values)}
          onChange={(name,text)=>setValues({name:text})}
        >
          {({ handleSubmit}) => (
            <Form> 
              <Field
                component={CustomInput}
                name="username"
                placeholder="Username"
                headerBackgroundColor={Colors.HomeColor}
              />
              <Field
                component={CustomInput}
                headerBackgroundColor={Colors.HomeColor}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              
          
    
    <center>
               <View style={[styles.button,styles.backGroundGreen]}>
             
              <Text  
          style={styles.textWhite} 
          //onPress={this.handleRequest.bind({...this.props,action:this.actionLabel})} 
          onPress={handleSubmit} 
          title="SignIn"
         // disabled={!isValid}
          >
              Sign In
          </Text>
          
          </View>
          <View  style={{flexDirection:'row', justifyContent:'space-between',flexWrap:"wrap"}}>
      <View>
          <Text style={styles.greetingText}>
          <CheckboxField
          name="rememberMe"
          />
              Remember Me
          </Text>
      </View>
      <View>
        {isForgotPasswordVisible?
          <Text onPress={handleForgotPassword()} style={styles.greetingText}>
              Forgot Password?
          </Text>
          :<></>
        }
      </View>
  </View>
          </center>
          </Form> 
          )}
        </Formik>
          </View>
      </View>
 </View>
 
 <View style={{flex:1,backgroundColor:Colors.LoginRow2Color}}>
 <View 
      style={{justifyContent:'center', 
      flexDirection:'column',
      alignContent:'center'}}
      >
          <br/>
          <center>
              <Text style={[styles.textWhite,styles.header]}>
                  {greetings}
              </Text>
          </center>
          <br/>
          <center>
              <Text  style={[styles.greetingText]}> 
                  {message}
              </Text>
          </center>
          <br/>
          <br/>
          <center>
          <View style={[styles.button,styles.backGroundWhite]}>
             
        <Text  
         style={styles.textGreen} 
         onPress={()=>handleRegister(props)} 
         title="Register"
         >
             Register
         </Text>
         
         </View>
          </center>
          </View>
 </View>
</View>
)
}
const  CheckboxField =({ ...props }) => {
const { setFieldValue } = useFormikContext();
const [field] = useField(props);

return (
  <ConfigProvider
  theme={{
    token: {
      colorPrimary: Colors.LoginBorderColor,
      colorBorder: Colors.LoginBorderColor,
      paddingXS:2,
      marginXS:2,
      fontSize:20,
    },
  }}
>
  <Checkbox
    {...field}
    {...props}
    onClick={val=>setFieldValue(field.name,val)}
  />
  </ConfigProvider>
);
};

function handleForgotPassword(){

}
function handleRegister(props){
 // alert(JSON.stringify(props));
props.navigation.navigate('Register',{"isCreate":true});
}
export default Login;