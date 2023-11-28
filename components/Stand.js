import * as React from 'react';
import {useRef, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { EvilIcons, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import * as webBrowser from 'expo-web-browser';

const NavigateToHome = props=>{
    props.navigation.navigate('Home');
  }

const Stand = props =>  {
    return (
      
      <View style={styles.container}>

        <View style={styles.toggol}>
            <TouchableOpacity onPress={() => NavigateToHome(props)}>
                <View >
                    <AntDesign name="arrowleft" size={34} color="black" />
                </View>
          </TouchableOpacity> 
        </View>
        
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Standalone Application </Text>
        <Text  style={{fontSize:25, color:'#043F8D', fontWeight:'bold'}}>Development</Text>

        <ScrollView style={styles.vi}>
            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>C programming</Text>
                    <Image source={require('../assets/icons8-c-programming-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>
        
                <Text style={{fontWeight:'bold'}}>C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.</Text>

                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=KJgsSFOSQv0')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>C# programming</Text>
                    <Image source={require('../assets/icons8-c-sharp-logo-2-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=GhQdlIFylQ8')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>C++</Text>
                    <Image source={require('../assets/icons8-c++-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=vLnPwxZdW4Y')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>Java</Text>
                    <Image source={require('../assets/icons8-java-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=eIrMbAQSU34')}>
                    <View style={styles.button1}>
                        <Text style={{ color:'#FFFFFF', fontWeight:'bold'}}>Click to more</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.card1}>
                <View style={styles.topic} >
                    <Text  style={{fontSize:20, color:'#043F8D', fontWeight:'bold'}}>Python</Text>
                    <Image source={require('../assets/icons8-python-48.png')} style={styles.image}  resizeMode="cover"></Image>
                </View>

                <Text style={{fontWeight:'bold'}}>Python is a high-level,general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It supports multiple programming paradigms, including structured, object-oriented and functional programming.</Text>
             
                <TouchableOpacity onPress={() => webBrowser.openBrowserAsync('https://www.youtube.com/watch?v=_uQrJ0TkZlc')}>
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
  export default Stand;

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