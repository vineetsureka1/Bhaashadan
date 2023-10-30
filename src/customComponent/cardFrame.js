import { StatusBar } from 'expo-status-bar';
import React from 'react';
import react, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,Button,UL,OL,Li,Image,TouchableOpacity,Dimensions,Modal } from 'react-native';
import ModalView from './ModalView';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
let title="Amit Kumar";
let description="bjkhjk kljk hiuhji hjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhjihjghj bjkhjk kljk hiuhji";
export default class CardFrame extends React.Component {
  
    constructor(props){
        super(props);
        //alert("card"+this.props.item.description);
        this.description=this.props.item.text;
        this.title=this.props.item.id;
        this.state={
          //selectedItem:this.props.item,
          modalVisible:false 
        }
        
    }
     renderLanguages ()  {
        return languages.map(name => <li>{name.item}</li>)
      }
      onCardClick(){
        //const [{selectedItem,modalVisible},setState]=useState({selectedItem:null,modalVisible:false});
        this.setState({modalVisible:!this.state.modalVisible});
      }
    /*  updateAPICall(){
       // this.state.itemToRender["Uploaded"][this.state.selectedLanguage.key].isPrevApiCalled=false;
       this.onCardClick();
    }
    */
    render(){
        return(
          <TouchableOpacity onPress={()=>this.onCardClick(this.props.item)}>
          <View style={{flex:3,flexDirection:'column',background:'white', margin:10}}>
           
              
            {
                this.props.workType=="Uploaded"?
                <View style={{flex:1}}>
                <Image  style={styles.imageStyle} source={{uri:this.props.item.image}} />
                </View>
                :
                <></>
            }
            
            
            <ScrollView style={styles.cardFrameContainer} >
            
                <View style={styles.descriptionContainer}>
                <Text style={styles.frameTitle}>
                    {this.title}  
               
                </Text>
                <Text style={styles.frameText}  ellipsizeMode='tail' numberOfLines={9}>
                     
               {this.description}
               
                </Text>
                
                </View>
                
                
               </ScrollView> 
            
            
            </View> 
            {this.state.modalVisible?
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                   onRequestClose={()=>onCardClick(this.props.item)} 
                    
                    >
                        <ModalView 
                        item={this.props.item}
                        onPressAction={()=>this.onCardClick()}
                        onUploadAction={()=>this.onCardClick()}
                        workType={this.props.workType}
                        />
                    </Modal> 
                    :
                    <></>
                    }
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    profileStyle:{
        alignItems:'center',
        backgroundColor:'#d7f8eb', 
    },
    descriptionContainer:{
       // borderRadius: 120,
        borderColor:'red',
       // borderWidth:1,
       width: '100%',
      // height: '100%',
       // justifyContent:'center',
      // flexWrap:'nowrap',
      //  overflow:'hidden',
      //  textOverflow:'hidden',
       
      // overflow:'hidden',
      // numberOfLines:9,
        //position:'relative',
        //top:0,
        //left:0,
    },
    cardFrameContainer:{
      flex:3,
        backgroundColor:'white', 
        width:width*.3,
        height:height*.1,
        maxwidth: 400,
        minWidth:200,
        maxHeight:300,
        minHeight: 200,
       // flexWrap:'wrap',
      //  textOverflow:'',
        ellipsizeMode:'tail',
      // overflow:'hidden',
       // margin:10,
       // position:'absolute',
        
    },
    profileEditButton:{
        color:'green',
    },
    buttonContainer:{
        width:200,
        height:175,
        fontSize:5,
        borderRadius:5,
        
    },
    frameText:{
        //backgroundColor:'#0ccb7c',
        //borderRadius:5,
        textAlign:'center',
        padding:2,
        margin:2,
        color:'grey',
        fontSize:14,
       // flexWrap:'nowrap',
        //textOverflow:'ellipsis',
    },
    frameTitle:{
        //backgroundColor:'#0ccb7c',
        //borderRadius:5,
        width:'100%',
       textAlign:'center',
       // padding:2,
       // margin:2,
        color:'black',
        fontSize:14,
        fontWeight:'600',
       // textOverflow:'ellipsis',
    },
    /*
    titleText:{
        color:'green',
        fontSize:5,  
        width:30,
        alignSelf:'flex-start',
        flexWrap:'nowrap',
    },
    */
    imageStyle:{
        backgroundColor:'grey',
        //borderRadius:5,
      //  textAlign:'center',
        //padding:2,
        //margin:2,
        color:'green',
       // fontSize:5,  
       width:'100%',
       minWidth:'200px',
       height:'100%',
      minHeight:'200px',
      alignSelf:'center',
     // aspectRatio:1,
      
      //alignContent:'center',
     // verticalAlign:'bottom',
     // overflow:'visible',
      //  top:'100px',
       //textAlign:'right',
      // position:'absolute',
    },
    titleContainer:{
        backgroundColor:'grey',
        //borderRadius:5,
      //  textAlign:'center',
        //padding:2,
        //margin:2,
        
        color:'green',
        fontSize:5,  
      // width:100,
      // height:100, 
       // textAlignVertical:'bottom',
        alignContent:'flex-end',
       // alignItems:'flex-end',
       // resizeMode:'contain',
        alignSelf:'flex-end',
        alignItems:'flex-end',
       // justifyContent:'//#endregion',
       // flexWrap:'nowrap',
      //  position:'absolute',
      // top:'-100',
      //left:'200',
       // aspectRatio:1,
       // overflow:'hidden',
    }
    
    
    });