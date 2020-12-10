import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';
import AppButton from './Button';
import {Header} from 'react-native-elements';
// import meter from '../img/fyp/meter.png'
import meter from '../assets/meter.gif'

import ph from '../img/fyp/ph-meter.png'
import bg from '../assets/bg.png'

const Ph = (props) =>{

        return(
            <ImageBackground  source={bg} style={{width:'100%' , height:'100%'}}  >
            {/* <Header
          backgroundColor="#117A65"
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            size:40,
            onPress: () => navigation.openDrawer(),
          }}
          centerComponent={{
            text: 'Motor',
            style: {color: '#fff', fontSize: 24},
          }}
        /> */}
            <View style={{flex:1, marginVertical:40}}>

             <Image style={{width:100 , height:110,  marginTop:80 , justifyContent:'center' , alignSelf:'center'}} source={ph} />
            <Text style={{fontSize:30, fontWeight:'bolder',marginTop:20, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}>PH METER</Text>

            <View style={{width:'100%' ,marginTop:0}}>
                <Image style={{ width:170, height:150 , justifyContent:'center' , alignSelf:'center' }} source={meter}
                />
                </View>
                <Text style={{fontSize:30, fontWeight:'bolder',marginTop:0, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}> 7ph</Text>

                <View style={{flex:1, marginTop:20 }}>
                <AppButton title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />
                </View>
</View>
</ImageBackground>
)
}
export default Ph;

const styles=StyleSheet.create({

  

})