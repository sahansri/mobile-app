import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import {useState} from 'react';
import { EvilIcons } from '@expo/vector-icons';

const NavigateToLogin = props=>{
    props.navigation.navigate('Login');
}
const NavigateToReg = props=>{
    props.navigation.navigate('Reg');
}


const LoginAndReg = props =>  {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , }}>
            <View style={{height:200,width:200,borderRadius:50,borderColor:'#043F8D', borderWidth:5}}>
                <Image source={require('../assets/RockyCoder.png')} style={{height:'100%',width:'100%',borderRadius:45,borderColor:'black',}} resizeMode="cover"></Image>
            </View>
        </View>

        <View style={styles.buttonborder}>
            <TouchableOpacity style={styles.login} onPress={() => NavigateToLogin(props)}>
                <View>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Login</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.register} onPress={() => NavigateToReg(props)}>
                <View>
                    <Text>Register</Text>
                </View>
            </TouchableOpacity>
                
            <Text>©2022 Gnix Corp.</Text>
        </View>

        <StatusBar style="dark" /> 
      </View>
    );
  }
  export default LoginAndReg;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
        
    },
    login:{
        borderWidth:3,
        borderRadius:10,
        borderColor:'#FBBC04',
        backgroundColor:'#043F8D',
        alignItems:'center',
        width:'50%',
        padding:10,
        marginTop:80,

    },
    register:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'black',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        width:'50%',
        padding:10,
        margin:30,
    },
    buttonborder:{
        // flex: 1,
        // justifyContent: 'center',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems: 'center' ,
        width:'90%',
        height:'40%',
        backgroundColor:'#FBBC04',
    },
  });
  