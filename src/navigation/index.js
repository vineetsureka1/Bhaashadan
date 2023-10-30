import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./../screens/Login/Login";
import Home from "./../screens/Login/Home";
import UserDashboard from "../screens/User/index";
import Register from "./../screens/Login/Register";
import { useCookies } from 'react-cookie';
import axios from "axios";
import globalconst from "../constant/globalvariables";
import { useDispatch ,useSelector} from "react-redux";
import { onLoad } from "./../actions/auth";
import { initialize } from "../actions/fetch";
import { useState } from "react";
import { onLoad as loginAction } from "./../actions/auth";
const Stack = createNativeStackNavigator();

var initialRouteName='Home';



const NavigationProvider = (props) => {
  //handleCookie();
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRouteName}>

    <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
        {...props}
      />
<Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{ headerShown: false }}
        {...props}
      />

    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default NavigationProvider;