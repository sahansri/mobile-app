import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import {useState} from 'react';
import { EvilIcons } from '@expo/vector-icons';

const NavigateToSelect = props=>{
    props.navigation.navigate('LoginAndReg');
}

const Main = props =>  {
  // const[name,setName]=useState("")
  const[show,setShow]=useState(false)

  const click = () =>{
    setShow(true)
    setTimeout(()=>{
      setShow(false)
      NavigateToSelect(props)
    },2000)
  }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,}}>
          
          <View style={{height:200,width:200,borderRadius:50,borderColor:'#043F8D', borderWidth:5}}>
            <Image source={require('../assets/RockyCoder.png')} style={{height:'100%',width:'100%',borderRadius:45,borderColor:'black',}} resizeMode="cover"></Image>
            

            <View style={styles.indicater}> 
            <ActivityIndicator size="large" animating={show} color='#043F8D'/>
            </View>

            <TouchableOpacity onPress={() => click()}>
              <View style={styles.buttonBorder}>
                  <Text style={{fontWeight:"bold", fontSize:15, color:'white',}}>Get Starts </Text><EvilIcons name="arrow-right" size={30} color="white" />
              </View>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', alignItems: 'center' ,padding:10,}}>
            <Text>©2022 Gnix Corp.</Text>
            </View>
            
          </View>
          
        </View>
        <StatusBar style="dark" /> 
      </View>
    );
  }
  export default Main;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      backgroundColor:'#FBBC04',
        
    },
    indicater:{
     paddingTop:120,
     paddingBottom:80,
    },
    buttonBorder:{
      width:'100%',
      flexDirection:'row',
      padding:10,
      justifyContent: 'center',
      alignItems: 'center' ,
      borderWidth:3,
      borderColor:'#043F8D',
      backgroundColor:'#043F8D',
      borderRadius:50,
    },
  });
  