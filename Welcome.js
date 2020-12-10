import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground } from 'react-native';

class Welcome extends Component{


    render(){
        return(
           <ImageBackground style={{ width:'100%' , height:'100%'}} source={require("./img/bgimage.jpg")}>
      <View>
       <Text style={styles.welcom}>WELCOME</Text>
     </View>
      </ImageBackground> 

        )
    }
}

export default Welcome; 

const styles = StyleSheet.create({
    welcom: {
      flex:2 ,
      justifyContent:'center',
      alignItems:'center',
      fontSize: 40,
      color:'white',
      fontFamily:'fantacy',
      paddingLeft:80,
      paddingTop:140,
  
    }
  });