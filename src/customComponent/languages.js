import React, { useState} from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity,ActivityIndicator,FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../actions/auth";
import { useCookies } from "react-cookie";
import { withCookies, Cookies } from 'react-cookie';
import { initialize } from "../../actions/fetch";
import { clearAllStoreData } from "../../actions/rootAction";
import Colors from "./../../constant/color"
import Styles from "./../../constant/GlobalStyles"
import ButtonTypeRadio from "./../../customComponent/ButtonTypeRadio"
import { getParagraph,getJob } from "../../actions/fetch";

const Languages = (props) => {
  //const [cookies, setCookie] = useCookies();
  const state = useSelector((state) => state.Languages);
  const [workType,setWorkType]=useState("Pending");
  const [isLoading,setIsLoading]=useState(true);
  const [tempIndex,setSelectedLanguage]=useState(0);
  //setSelectedLanguage(0);
  const dispatch = useDispatch();

  return (
    <View>
        <WorkType />
    </View>
  )
}
export default Languages;