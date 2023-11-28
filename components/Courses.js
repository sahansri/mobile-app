import * as React from 'react';
import {useRef, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const NavigateToMobile = props=>{
  props.navigation.navigate('Mobile');
}
const NavigateToWeb = props=>{
  props.navigation.navigate('Web');
}
const NavigateToStand = props=>{
  props.navigation.navigate('Stand');
}


const Courses = props =>  {


    return (
      
      <View style={styles.container}>
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>  Catagories </Text>

        <ScrollView style={styles.vi}>

          <TouchableOpacity onPress={() => NavigateToMobile(props)}>
          <View style={styles.card}>
            <Image source={require('../assets/Kotlin.png')} style={{width:'100%', height:'100%', borderRadius:10,}}  resizeMode="cover"></Image>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => NavigateToWeb(props)}>
          <View style={styles.card}>
            <Image source={require('../assets/web.png')} style={{width:'100%', height:'100%', borderRadius:10,}}  resizeMode="cover"></Image>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => NavigateToStand(props)}>
          <View style={styles.card}>
            <Image source={require('../assets/Sta.png')} style={{width:'100%', height:'100%', borderRadius:10,}}  resizeMode="cover"></Image>
          </View>
          </TouchableOpacity>

        </ScrollView>

        <StatusBar style="dark" />      
      </View>
      
    );
  }
  export default Courses;
  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
      paddingTop:50,
      padding:30,
        
    },
    vi:{
      flex:1,
      height:'100%',
      width:'100%',
      backgroundColor:'#FFFFFF',

    },
    card:{
      margin:20,
      height:250,
      width:'90%',
      borderWidth:4,
      borderColor:"#043F8D",
      borderRadius:15,

    },
  });