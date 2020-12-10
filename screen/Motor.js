import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity,Button  } from 'react-native';
import AppButton from './Button';
import {Header} from 'react-native-elements';
import bg from '../assets/bg.png'

const Motor = (props) =>{

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

             <Image  style={{width:100 , height:110,  marginTop:80 , justifyContent:'center' , alignSelf:'center'}} source={require('../img/fyp/technology.png')} />
      
            <Text style={{fontSize:30, fontWeight:'bolder',marginTop:10,justifyContent:'center' , alignSelf:'center', color:'#117A65'  }}>ELECTRIC MOTOR</Text>

            <View style={styles.flexBtn}>

            <AppButton title='ON' isTrue="1" />
               <AppButton title='OFF' isTrue="1" />
               
                </View>
                <View style={{flex:1, bottom:100}}>
                <AppButton title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />
                </View>
</View>

   </ImageBackground>

)
}
export default Motor;

const styles=StyleSheet.create({

    btn1:{
        backgroundColor: 'red',
        color:'white',
        borderRadius:100,
        marginVertical:10
    },
    flexBtn:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:40,
        marginHorizontal:10
        
    },

    img1:{
        justifyContent:'center',
        alignSelf:'center',
    }

  

})