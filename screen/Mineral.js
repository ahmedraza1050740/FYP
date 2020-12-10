import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';
import AppButton from './Button';
import {Header} from 'react-native-elements';
import mineral from '../img/fyp/mineral.png'
// import meter from '../img/fyp/meter.png'
import meter from '../assets/meter.gif'
import bg from '../assets/bg.png'


const Mineral = (props) =>{

    
        return(
            <ImageBackground source={bg} style={{width:'100%' , height:'100%'}}  >
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

             <Image style={{width:100 , height:110,  marginTop:80 , justifyContent:'center' , alignSelf:'center'}} source={mineral} />
            <Text style={{fontSize:30, fontWeight:'bolder', marginTop:20, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}>Minerals</Text>

            <View style={{width:'100%' ,marginTop:0}}>
                <Image style={{ width:120, height:120 , justifyContent:'center' , alignSelf:'center' }} source={meter}
                />
                </View>
                <Text style={{fontSize:30, fontWeight:'bolder', marginTop:20, justifyContent:'center' , alignSelf:'center', color:'#117A65' }}>50 ppm</Text>

                <View style={{flex:1, marginTop:10 }}>
                <AppButton title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />
                </View>
</View>

   </ImageBackground>

)
}
export default Mineral;

const styles=StyleSheet.create({

  

})