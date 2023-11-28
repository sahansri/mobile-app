import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View, Image, Button, Alert,KeyboardAvoidingView, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import {useState} from 'react';
import { EvilIcons, FontAwesome5, AntDesign  } from '@expo/vector-icons';


const NavigateToHome = props=>{
    props.navigation.navigate('Home');
}
const NavigateToLoginAndReg = props=>{
  props.navigation.navigate('LoginAndReg');
}

const Login= props =>  {
    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-400}>
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.poster}>
          
          <ImageBackground source={require('../assets/6300830.jpg')} style={{height:'100%',width:'100%',}} resizeMode="cover">
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
              placeholder="Username or Email"
              onChangeText={onChangeUsername}
              value={username}
            />

        <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
            />
        <Text>Forgot Password?</Text>

        <TouchableOpacity style={styles.login} onPress={() => NavigateToHome(props)}>
            <View>
                <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Login</Text>
            </View>
        </TouchableOpacity>

        <Text style={{margin:20,}}>Or Using</Text>
        
        <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between',}}>
          <Image source={require('../assets/icons8-google-48.png')} style={{height:50,width:50,}} resizeMode="cover"></Image>
          <Image source={require('../assets/icons8-facebook-50.png')} style={{height:50,width:50,}} resizeMode="cover"></Image>
          <Image source={require('../assets/icons8-apple-logo-50.png')} style={{height:50,width:50,}} resizeMode="cover"></Image>
        </View>

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
      margin:18,
      height:50,
      borderWidth:3,
      borderRadius:50,
      borderColor:'#043F8D',
    },
  login:{
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
    height:500,
    alignItems:"center",
    justifyContent:"center",
  },
  });
  