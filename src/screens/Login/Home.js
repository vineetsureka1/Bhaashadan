import React from 'react';
//import react, { Component } from 'react';
import {  View,Text,Image, ScrollView} from 'react-native';


import Styles from '../../constant/GlobalStyles'
import Logo from '../../customComponent/logo';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import globalconst from '../../constant/globalvariables';
import { login, onLoad  } from "./../../actions/auth";


const handleCookie=(props)=>{
  const dispatch = useDispatch();
   const [cookies, setCookie] = useCookies(['bhaashadan']);
   //alert("home props"+JSON.stringify(props));
   axios.defaults.baseURL = globalconst.apiBaseUrl;
   if(cookies && cookies.bhaashadan && cookies.bhaashadan.user)
    { dispatch(onLoad(cookies.bhaashadan.user)).then((response)=>{
     // alert("navigation onload "+JSON.stringify(response));
     // dispatch(initialize(response.bhaashadan.user));
     props.navigation.replace("UserDashboard");
   // initialRouteName="UserDashboard";
     })
     /*.catch(error=>{
      alert ("dispatch user error"+error);
     })*/
    }
   else
   {
   dispatch(onLoad(null))
  /*.then((response)=>{
    alert ("dispatch null response"+response)
  }).catch(error=>{ alert ("dispatch null error"+error)})*/
  }
}

const Home=(props)=>{
  handleCookie(props);
    return(                     
          <View style={Styles.homeContainer} >
              <Logo />
              <View style={Styles.homeContentContainer} >
                <View style={Styles.homeLeftContainer} >
                <Text style={Styles.homeHeading}>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text style={Styles.homeTextContent}>
                    
                  Lorem ipsum dolor sit amet consectetur. Leo amet condimentum urna maecenas erat tincidunt. Quis commodo cras in accumsan mi neque. Morbi vivamus a tempor tellus at.
                  </Text>
                </View>
                <View style={Styles.homeRightContainer}>
                  <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
                      <iframe
                      src="https://www.youtube.com/embed/C0DPdy98e4c"
                      //frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen={true}
                      title="video"
                      /><br/>
                  </View>
                </View>
              </View>
              <View style={Styles.homeButtonContainer}>
                <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleSignIn({...props,"isCreate":false})}>Sign In</Text>
                <Text style={[Styles.button,Styles.textWhite,{visibility:'hidden'}]} onPress={()=>handleRegister({...props,"isCreate":true})}>Register</Text>
                <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleRegister({...props,"isCreate":true})}>Register</Text>
              </View>
          </View>
        );                    
}

const handleSignIn=(props)=>{
 
  props.navigation.navigate('Login',{isCreate:props.isCreate});
  return;
  //alert("after");
}
const handleRegister=(props)=>{
  
  props.navigation.navigate('Register',{isCreate:props.isCreate});
  return;
  
  //alert("after");
}
export default Home;



