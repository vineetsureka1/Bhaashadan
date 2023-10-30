import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useLayoutEffect,useState} from 'react';
import react, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Modal, FlatList, ActivityIndicator,SafeAreaView,Dimensions} from 'react-native';
import axios from "axios";
//import { useInfiniteQuery } from 'react-query';

import CardFrame from './cardFrame';
import Styles from '../constant/GlobalStyles'
import Header from './Header';
import Profile from './Profile';
import ButtonTypeRadio from './ButtonTypeRadio';
import ModalView from './ModalView';


import Colors from '../constant/color'
import { useDispatch, useSelector } from 'react-redux';
import { getParagraph } from '../actions/fetch';
//import Languages from './languages';

 export default function FlatListView(props) {



  return <FlatList {...props}/>

 }
 /*
    useEffect(() => {
      //setIsLoading(false);
      if(refreshing && isLoading){
     // setLangState({isLoading:true,refreshing:true});
      dispatch(getParagraph({selectedLanguage:stateObj.selectedObject.selectedLanguage,selectedWorkType:stateObj.selectedObject.selectedWorkType,alreadyExists:true,nextUrl:stateObj.selectedObject.nextUrl}))
      setLangState({isLoading:false,refreshing:false});
      }
  
    }, [isLoading]);

  
    return isLoading;
  }


function FlatListView({props,dependency}){
    useEffect(()=>{
const {refreshing}={...props};
setRefreshing(false);
return(
*/
 
   //  return <FlatList {...props}/>

                
                  
                  

   /*             
  )
        //dispatch(getParagraph({selectedLanguage:stateObj.selectedObject.selectedLanguage,selectedWorkType:stateObj.selectedObject.selectedWorkType,alreadyExists:true,nextUrl:stateObj.selectedObject.nextUrl})) 
    },[refreshing])
    //const state1 = useSelector((state) => state);
   // const state = props.stateObject;
    //const state=state1.selectedObject;
//    alert("state in flatlist"+JSON.stringify(state));


const [refreshing,setRefreshing]=useState(props.refreshing);
//alert(JSON.stringify(props.refreshing))

  */


//export default FlatListView
