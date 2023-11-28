import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, KeyboardAvoidingView, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import {useState} from 'react';
import { EvilIcons, FontAwesome5,AntDesign } from '@expo/vector-icons';


const NavigateToLogin = props=>{
    props.navigation.navigate('Login');
}

const NavigateToLoginAndReg = props=>{
  props.navigation.navigate('LoginAndReg');
}

const Login= props =>  {
  
    return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-400}>
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.poster}>
          <ImageBackground source={require('../assets/6300959.jpg')} style={{height:'100%',width:'100%',}} resizeMode="cover">
          <TouchableOpacity onPress={() => NavigateToLoginAndReg(props)}>
              <View style={{marginTop:50,marginLeft:30,}}>
                  <AntDesign name="arrowleft" size={34} color="black" />
              </View>
            </TouchableOpacity>    
          </ImageBackground>
      </View>
      
      
      <View style={styles.form}>
        
        <TextInput
              style={styles.inputs}
              placeholder="Username"
            />

        <TextInput
              style={styles.inputs}
              placeholder="Email"
            />

        <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
            />

        <TextInput
              style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
        
        <TouchableOpacity style={styles.register} onPress={() => NavigateToLogin(props)}>
            <View>
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Register</Text>
            </View>
        </TouchableOpacity>

      </View>
 
      <StatusBar style="dark" /> 
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    );
  }
  export default Login;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      justifyContent:'center',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
        
    },
    poster:{
      height:380,
      width:380,
    },
    inputs: {
      alignItems:"center",
      justifyContent:"center",
      fontSize:15,
      padding:10,
      width:300,
      margin:10,
      height:50,
      borderWidth:2,
      borderRadius:50,
      borderColor:'#043F8D',
      backgroundColor:'#FFFFFF',
    },
    register:{
      borderWidth:3,
      borderRadius:10,
      borderColor:'#FBBC04',
      backgroundColor:'#043F8D',
      justifyContent:"center",
      alignItems:'center',
      width:200,
      padding:10,
      marginTop:30,
  },
    form:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#FBBC04',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      padding:20,
    },
  });
  
  