import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Octicons } from '@expo/vector-icons';

const NavigateToMobile = props=>{
  props.navigation.navigate('Mobile');
}
const NavigateToWeb = props=>{
  props.navigation.navigate('Web');
}
const NavigateToStand = props=>{
  props.navigation.navigate('Stand');
}



const Home = props =>  {
    return (
      <ScrollView>
      <View style={styles.container}>
       
        <View style={styles.headerBorder}>

          <View>
            <Text style={{fontSize:20, color:'#043F8D', }}>HI... Sahan</Text>
            <Text style={{fontSize:30, color:'#043F8D', fontWeight:'bold'}}>Good Morning!</Text>
            
          </View>

          <View>
          <Image source={require('../assets/IMG-20220214-WA0058.jpg')} style={{height:70,width:70,borderRadius:50,borderColor:'#043F8D', borderWidth:3,}} resizeMode="cover"></Image>
          </View>
          
        </View>
        
        <View style={styles.catagoryHeader}>
          <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>    <Octicons name="dot-fill" size={24} color="#043F8D" /> Catagories </Text>
        </View>

        <View style={styles.catogoryBorder}>

          <View style={styles.catogoryTop}>
            <View style={styles.catogoryTop1}>

              <TouchableOpacity onPress={() => NavigateToMobile(props)}>
                <View style={styles.mobile}>
                  <Image source={require('../assets/Kotlin.png')} style={{width:'100%', height:'100%',borderRadius:7,}}  resizeMode="cover"></Image>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => NavigateToWeb(props)}>
                <View style={styles.web}>
                  <Image source={require('../assets/web.png')} style={{width:'100%', height:'100%',borderRadius:7,}}  resizeMode="cover"></Image>
                </View>
              </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => NavigateToStand(props)}>
              <View style={styles.standalone}>
                <Image source={require('../assets/Sta.png')} style={{width:'100%', height:'100%',borderRadius:7,}}  resizeMode="cover"></Image>
              </View>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.feedHeader}>
          <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>     <Octicons name="dot-fill" size={24} color="#043F8D" />  News Feed </Text>
        </View>
        
        <View style={styles.poster}>
            <Image source={require('../assets/4015688_118.jpg')} style={{width:'100%', height:'100%',borderRadius:7,}}  resizeMode="contain"></Image>
        </View>

        <View style={styles.poster}>
            <Image source={require('../assets/10487786_18824957.jpg')} style={{width:'100%', height:'100%',borderRadius:7,}}  resizeMode="contain"></Image>
        </View>
        


         
        <StatusBar style="dark" />      
      </View>
      </ScrollView> 
    );
  }
  export default Home;
  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      padding:30,
      // justifyContent:'center',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
        
    },
    headerBorder:{
      backgroundColor:'#FBBC04',
      marginTop:35,
      width:350,
      height:130,
      padding:30,
      borderRadius:30,
      // borderWidth:3,
      // borderColor:'#043F8D',
      flexDirection:'row',
      justifyContent:'space-between',


    },
    catagoryHeader:{
      margin:30,
      right:120,
      
    },
    catogoryBorder:{
      width:'100%',
      height:290,
      // paddingLeft:30,
      // paddingRight:30,
      flexDirection:'column',
      justifyContent:'space-between',
    },
    catogoryTop:{
      // padding:30,
      // marginBottom:5,
      height:240,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    catogoryTop1:{
      width:150,
      // flexDirection:'column',
      justifyContent:'space-between',
    },
    standalone:{
      width:170,
      borderColor:'#043F8D',
      borderWidth:3,
      borderRadius:10,

    },
    mobile:{
      marginBottom:10,
      height:120,
      width:'100%',
      borderRadius:10,
      borderWidth:3,
      borderColor:'#043F8D',

    },
    web:{
      height:110,
      width:'100%',
      borderRadius:10,
      borderColor:'#043F8D',
      borderWidth:3,

    },
    feedHeader:{     
      right:120, 
    },
    poster:{
      height:200,
      width:350,
      margin:30,
      borderRadius:10,
      borderColor:'#043F8D',
      borderWidth:3,
    },
    
  });