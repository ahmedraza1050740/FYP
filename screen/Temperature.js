import React from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ToastAndroid  } from 'react-native';
import {Header} from 'react-native-elements';
import tem from '../img/fyp/degrees.png'
// import meter from '../img/fyp/meter.png'
import meter from '../assets/meter.gif'
import AppButton from './Button';
import bg from '../assets/bg.png'

const Temperature= (props) => {

  const gettemp=()=>{
    // try{
    //   fetch("http://172.0.0.1/temp?pass='123'").then(res=>{
    //   res.json().then(re=>{  
    //   console.log(re);
    // })
    //   })
    // }catch(e)
    // {console.log(e);
    // }
    ToastAndroid.show("here",ToastAndroid.SHORT);

  }

    
        return(
            <ImageBackground source={bg} style={{width:'100%' , height:'100%'}} >
                  {/* <Header
        backgroundColor="#117A65"       
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          size:40,
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{
          text: 'Temperature',
          style: {color: '#fff', fontSize: 24},
        }}
      /> */}
            <View style={{flex:1, marginVertical:40}}>
             <Image style={{width:100 , height:110,  marginTop:80 , justifyContent:'center' , alignSelf:'center'}} source={tem} />
            <Text style={{fontSize:30, marginTop:20, color:'#117A65', fontWeight:'bolder',justifyContent:'center' , alignSelf:'center' }}>TEMPERATURE</Text>

            <View style={{width:'100%' ,marginTop:0}}>
                <Image style={{ width:170, height:150 , justifyContent:'center' , alignSelf:'center' }} source={meter}
                />

                </View>
                <Text style={{fontSize:30, marginTop:0, color:'#117A65', fontWeight:'bolder',justifyContent:'center' , alignSelf:'center' }}>21</Text>
                <View style={{flex:1, marginTop:10}}>
                <AppButton  title="Get Temp" isTrue="1" onPress={() => gettemp()} />
                <AppButton  title="Go back" isTrue="1" onPress={() => props.navigation.goBack()} />
                </View>
                </View>

   </ImageBackground>

)
}
export default Temperature;

const styles=StyleSheet.create({

  

})