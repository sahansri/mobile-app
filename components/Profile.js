import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const NavigateToLogin = props=>{
  props.navigation.navigate('Login');
}

const Profile = props =>  {
    return (
      <View style={styles.container}>
          <View style={styles.profile}>
            <View>
            <Image source={require('../assets/IMG-20220214-WA0058.jpg')} style={styles.image}  resizeMode="cover"></Image>
            </View>

            <View style={styles.button1}>
              <Text  style={{fontSize:15, color:'#FFFFFF', fontWeight:'bold'}}>Edit profile</Text>
            </View>

            <View style={styles.button1}>
              <Text  style={{fontSize:15, color:'#FFFFFF', fontWeight:'bold'}}>Settings</Text>
            </View>

            <View style={styles.button1}>
              <Text  style={{fontSize:15, color:'#FFFFFF', fontWeight:'bold'}}>FAQ</Text>
            </View>

          </View>

          <TouchableOpacity onPress={() => NavigateToLogin(props)}>
          <View style={styles.button}>
          <Text  style={{fontSize:15, color:'#FFFFFF', fontWeight:'bold'}}>Logout</Text>
          </View>
          </TouchableOpacity>

        <StatusBar style="dark" /> 
      </View>
       
    );
  }
  export default Profile;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      padding:30,
      justifyContent:'space-between',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
        
    },
    profile:{
      justifyContent:'center',
      alignItems: 'center' ,
      height:600,
      width:'100%',
      borderRadius:10,
      borderWidth:4,
      borderColor:'#043F8D',


    },
    image:{
      width:170, 
      height:170, 
      borderRadius:100,
      borderWidth:4,
      borderColor:'#FBBC04',
  },
    button:{
      margin:20,
      padding:10,
      width:200,
      justifyContent:'center',
      alignItems: 'center' ,
      borderWidth:4,
      borderRadius:10,
      borderColor:'#C5221F',
      backgroundColor:'#C5221F',
    },
    button1:{
      margin:20,
      padding:10,
      width:200,
      justifyContent:'center',
      alignItems: 'center' ,
      borderWidth:4,
      borderRadius:10,
      borderColor:'#043F8D',
      backgroundColor:'#043F8D',
    },
  });