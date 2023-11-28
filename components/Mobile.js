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


const Mobile = props =>  {
    return (
      
    <View style={styles.container}>

        <View style={styles.toggol}>
            <TouchableOpacity onPress={() => NavigateToHome(props)}>
                <View >
                    <AntDesign name="arrowleft" size={34} color="black" />
                </View>
          </TouchableOpacity> 
        </View>
        
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Mobile Application </Text>
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Development</Text>

        <ScrollView style={styles.vi}>
            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>React Native</Text>
                    <Image source={require('../assets/icons8-react-100.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>
        
                <Text style={{fontWeight:'bold'}}>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.</Text>

                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>Kotlin</Text>
                    <Image source={require('../assets/icons8-kotlin-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/playlist?list=PLrnPJCHvNZuAIbejjZA1kGfLeA8ZpICB2')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>Ionic</Text>
                    <Image source={require('../assets/icons8-ionic-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Ionic is a complete open-source SDK for hybrid mobile app development created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013. The original version was released in 2013 and built on top of AngularJS and Apache Cordova.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/playlist?list=PLYxzS__5yYQljbuGjaeugpqs9U07gS5P5')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>Xamarin</Text>
                    <Image source={require('../assets/icons8-xamarin-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Xamarin is a Microsoft-owned San Francisco-based software company founded in May 2011 by the engineers that created Mono, Xamarin.Android and Xamarin.iOS, which are cross-platform implementations of the Common Language Infrastructure and Common Language Specifications.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/playlist?list=PLprnOV9ZLFnvA_vzjdvfs-lwWfP_8frOW')}>
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
  export default Mobile;

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