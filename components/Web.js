import * as React from 'react';
import {useRef, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { EvilIcons, FontAwesome5, AntDesign, FontAwesome  } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import * as webBrowser from 'expo-web-browser';


const NavigateToHome = props=>{
    props.navigation.navigate('Home');
  }


const Web = props =>  {
    return (
      
    <View style={styles.container}>        
        <View style={styles.toggol}>
            <TouchableOpacity onPress={() => NavigateToHome(props)}>
                <View >
                    <AntDesign name="arrowleft" size={34} color="black" />
                </View>
          </TouchableOpacity> 
        </View>
        
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Web Application </Text>
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Development</Text>

        <ScrollView style={styles.vi}>
            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>HTML 5</Text>
                    <Image source={require('../assets/icons8-html-5-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>
        
                <Text style={{fontWeight:'bold'}}>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.</Text>

                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=pQN-pnXPaVg')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>CSS</Text>
                    <Image source={require('../assets/icons8-css3-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=1Rs2ND1ryYc')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>JavaScript</Text>
                    <Image source={require('../assets/icons8-javascript-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=jS4aFq5-91M')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>PHP</Text>
                    <Image source={require('../assets/icons8-php-logo-16.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=OK_JCtrrv-c')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

        <StatusBar style="dark" />      
    </View>
      
    );
  }
  export default Web;

  const styles = StyleSheet.create({
    container: {
      flex:1,
      height:'100%',
      backgroundColor:'#FFFFFF',
      alignItems: 'center',
      paddingTop:50,
      padding:30,
        
    },
    toggol:{
        width:'100%',
    },
    vi:{
        flex:1,
        height:'10%',
        width:'100%',
        backgroundColor:'#FFFFFF',
  
      },
    card1:{
        margin:20,
        padding:15,
        height:300,
        width:'90%',
        borderWidth:4,
        borderColor:"#FBBC04",
        // alignItems: 'center',
        // justifyContent:'center',
        borderRadius:15,
  
      },
    image:{
        width:48, 
        height:48, 
    },
    topic:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:"100%",
    },
    button1:{
        marginTop:30,
        left:"25%",
        width:"50%",
        height:50,
        backgroundColor:'green',
        borderRadius:15,
        alignItems: 'center',
        justifyContent:'center',

    },

  });