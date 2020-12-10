import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';


class Login extends Component{

    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('./img/bg.jpeg')} >

            <View style={styles.overlay} >
                <Text style={styles.heading}>SingIn</Text>

                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} />
              
                <Button title="SingIn" onPress={()=> this.props.navigation.navigate('Home')} />

                  

            </View>

        </ImageBackground>

        )
    }
}
export default Login;



const styles= StyleSheet.create({
    overlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green'
    },
    // heading:{
    //     paddingBottom:20,
    //     fontSize:40,
    //     fontWeight:200,

    // },

    input:{
        justifyContent:'center' ,
         alignItems:'center',
         fontSize:20,
         padding:10,
         
    },
    button:{
        backgroundColor:'red'
    }
})