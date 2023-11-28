import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Notifications = props =>  {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="email-newsletter" size={40} color="#043F8D" />
        </View>
        <View style={styles.body}>
          <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>0 Notifications! </Text>
        </View>
        
        <StatusBar style="dark" /> 
      </View>
    );
  }
  export default Notifications;
  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      padding:30,
      justifyContent:'flex-start',
      backgroundColor:'#FFFFFF',
      alignItems: 'center' ,
        
    },
    header:{
      width:'100%',
      height:60,
      padding:10,
      // borderWidth:3,
    },
    body:{
      width:'100%',
      height:'90%',
      margin:20,
      // borderWidth:3,
      justifyContent:'center',
      alignItems: 'center' ,
    },


  });