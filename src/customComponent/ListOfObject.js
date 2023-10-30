import { StatusBar } from 'expo-status-bar';
import React,{useLayoutEffect,useState} from 'react';
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
import FlatListView from './FlatLIstView';


import Colors from '../constant/color'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getParagraph } from '../actions/fetch';
//import Languages from './languages';

const ListOfObject=(props)=>{
    //const state1 = useSelector((state) => state);
   // const state = props.stateObject;
    //const state=state1.selectedObject;
//    alert("state in flatlist"+JSON.stringify(state));
const currentObj = useSelector((state) => state.language.selectedObject);
const [isLoading,setIsLoading]=useState(false);
/*
function changeRefreshing({ src, isEndReached }) {
  

  useEffect(() => {
    fetData();

  }, [refreshing]);

  return refreshing;
}
*/
//const {onEndReached,onEndReachedThreshold,refreshing,onRefresh}={...props}
//const [refreshChild,setRefreshChild]=useState(true);
//var selectedItem=null;
function getMoreData(props){
//props.onEndReached
props.onEndReached();
//
//setRefreshChild(!refreshChild);
if(!props.refreshing)
props.onRefresh();

}
const updatedScrollIndex=props.initialScrollIndex+9;
//const stateObj = useSelector((state) => state.language.selectedObject.results);
return (
  

<>
{
!props.refreshing?
<FlatList  {...props} initialScrollIndex={props.initialScrollIndex} extradata={updatedScrollIndex} />


:
<ActivityIndicator><FlatList  {...props} initialScrollIndex={props.initialScrollIndex} extradata={refreshing} /></ActivityIndicator>

}
</>)


}


export default ListOfObject