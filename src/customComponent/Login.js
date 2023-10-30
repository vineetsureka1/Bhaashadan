import React from 'react';
import {Text, View,Image } from 'react-native';

import { Checkbox,ConfigProvider  } from "antd"

import axios from "axios";
//import DatePicker from 'react-native-datepicker';
import dayjs from 'dayjs';
import { Formik, Field, Form,useFormikContext,useField} from "formik";

import styles from "../constant/GlobalStyles";
import Colors from "../constant/color";
import globalconst from '../constant/globalvariables';

import CustomInput from "../CustomInput"

import * as yup from 'yup';

import { useCookies } from 'react-cookie';




function Login(props)  {
  const [cookies, setCookie] = useCookies(['bhaashadan']);
var propsSourceObject;
var greetings="Hello, Friends!"; 
var message="Fill up information and start journey with us"; 
var propUsername="";
var isForgotPasswordVisible=false;


if(props.route && props.route.params && props.route.params.isCreate!=undefined && props.route.params.isCreate!=null)
{
    propsSourceObject=props.route.params;
  
}
else
{
    propsSourceObject=props;
}
if(propsSourceObject.username!=undefined && propsSourceObject.username!=null )
{
propUsername=propsSourceObject.username;
}

const formValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('  Username is required'),
  password: yup
    .string()
    .min(8, ({ min, value }) => `${min - value.length} characters to go`)
    .required('  Password is required'),
  })
  function handleFormSubmit(values,props){
  var errorMsg=null;
  //alert(values['rememberMe']);
  const endpoint ='api/auth/';
    //alert(endpoint);
    const payload = { username: values['username'], password: values['password'] } ;
    //alert("input username="+values['username']);
    axios.defaults.baseURL = globalconst.apiBaseUrl;
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const rememberMe=values['rememberMe'];
    
	//alert(rememberMe+" rememberMe")
	 let self=props;
    axios({
        method: 'post',
        url: endpoint,
        data: payload
      }).then(function (response) {
        alert(response.status);
        const { token,user} = response.data;
        //alert("output username="+user.first_name);
        axios.defaults.headers.common.Authorization = `Token ${token}`;
		
		const lan = user.language.split(',');
          user.languages=[];
          for(var i=0;i<lan.length;i++){
            var newLan={};
            newLan.key=lan[i];
            newLan.item=lan[i].charAt(0).toUpperCase() + lan[i].substr(1).toLowerCase();
            user.languages.push(newLan);
          }
          if(rememberMe){
          var bhaashadanObject={};
          bhaashadanObject.user=user;
          bhaashadanObject.token=axios.defaults.headers.common.Authorization;
          setCookie('bhaashadan',JSON.stringify(bhaashadanObject),{path:'/',expires:new Date(dayjs( Date.now()).add(30,'day').format("YYYY-MM-DD"))})
          }
		  self.navigation.navigate('UserDashboard',{user:user});
      })
      .catch(function (error) {
        alert(error.response.status);
        if(error.response.data.non_field_errors!=null)
        {
        alert("API call fails with error:"+error.response.data.non_field_errors);
        console.log(error.response.data.non_field_errors);
        }
        else{
        alert("API call fails with error:"+error);
        console.log(error);
        }
      });
}

  return (
    <View style={styles.loginContainer}> 
    <View style={{flex:2,backgroundColor:Colors.HomeColor}}>
        <View style={{flexDirection:'column'}}>
        <Image style={styles.logo} source={require("../assets/iiitnew.png")} />
            <br/>
            <View style={{width:'80%',alignSelf:'center'}}>
               <center> <Text style={styles.loginHeaderText}>Login</Text></center>
               <Formik
            initialValues={{
              username: propUsername,
              password: '',
              rememberMe:false,
              
              
            }}
            validationSchema={formValidationSchema}
            onSubmit={values => handleFormSubmit(values,props)}
            onChange={(name,text)=>setValues({name:text})}
          >
            {({ handleSubmit, isValid,errors,values }) => (
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
  props.navigation.navigate('LoginOrRegister',{"isCreate":true});
}
export default Login;