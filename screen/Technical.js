// import React, { Component } from 'react';
// import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';
// import AppButton from './Button';
// import avatar from '../img/fyp/avatar.png'
// import bg from '../assets/bg.png'

// const Technical = (props) =>{

//         return(
//             <ImageBackground source={bg} style={{width:'100%' , height:'100%'}}  >
         
//             <View style={{flex:1, marginVertical:40}}>

//              <Image style={{width:100 , height:110,  marginTop:80 , justifyContent:'center' , alignSelf:'center'}} source={avatar} />
//             <Text style={{fontSize:30, fontWeight:'bolder', marginTop:20, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}>TECHNICAL SUPPORT</Text>

//            <View>
//                <Text>Email</Text>
//                <TextInput type='email' placeholder='Enter Email' />
//            </View>

//                 <View style={{flex:1, marginTop:20 }}>
//                 <AppButton title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />
//                 </View>
// </View>
// </ImageBackground>
// )
// }
// export default Technical;

// const styles=StyleSheet.create({

  

// })






import React from 'react';
import {View, StyleSheet, ImageBackground, Image,Item,  Text} from 'react-native';
// import {Item, Input, Text} from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';
import bg from '../assets/bg.png'
import avatar from '../img/fyp/avatar.png'

// import Button from '../components/button';
import Button from './Button';

// import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import AppButton from './Button';
import { TextInput } from 'react-native-gesture-handler';

const  Technical=(props)=> {
  const [text, setText] = React.useState('');

  return (
    <ImageBackground source={bg} style={Style.imgbg}>
      <View style={Style.main}>
        <View style={{alignItems: 'center', marginTop:90}}>
          <Image source={avatar} style={Style.logo} />
          <Text style={{fontSize:30, fontWeight:'bolder', marginTop:20, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}>TECHNICAL SUPPORT</Text>
        </View>

          
         <Input
         style={Style.innerInput}
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={30}
      color='red'
    />
  }/> 
        </View>
        
        <AppButton title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />


       
      {/* </View> */}
    </ImageBackground>
  );
}

const Style = StyleSheet.create({
  main:{
    width:'100%' ,
    height:'100%'
  },
  inputs:{
    width:"80%",
    alignSelf:'center',
    borderColor:'red'
  },
  innerInput:{
    backgroundColor:'blue', 
    color:'red'
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
    alignItems: 'center',
    top: 100,
  },
  imgbg: {
    width: '100%',
    height: '100%',
  },
  text: {
    width: '90%',
    margin: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    height: 50,
  },
  icons: {
    paddingLeft: 10,
  },
  inputtext: {
    fontSize: 15,
  },
  links: {
    alignItems: 'flex-end',
    position: 'relative',
    width: '80%',
    top: 5,
  },
  forgot: {
    color: 'white',
    fontSize: 14,
  },
  buttons: {
    alignItems: 'center',
    position: 'relative',
    top: 35,
  },
});

export default Technical;