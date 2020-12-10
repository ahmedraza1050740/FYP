import { StyleSheet, View, Text  } from 'react-native'
import * as React from 'react';
import {   Card, Title } from 'react-native-paper';

const  Cards1 = (props) =>     {

        return (
  <View >
                
  <Card style={styles.box} onPress={props.onPress}>
    <Card.Cover style={styles.image} source={props.image} />
    <Title style={styles.title} > {props.title} </Title>
 
  </Card>
  </View>
        )
            
}

export default Cards1

const styles=StyleSheet.create({

    box:{
        marginTop:15,
        alignContent:'center',
     alignSelf:'center',
     alignItems:'center',
        marginHorizontal: 10,
        borderRadius:20,
        shadowColor: "#000",
        width:50,
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,

        
    },
   
    image:{
        width: 10,
        backgroundColor:'transparent',
        height: 10,
        padding:10,
        alignContent:'center',
        alignSelf:'center',
        // marginVertical:'1rem'

       
    },

    title:{
        fontSize:10,
        fontWeight:'bold',
        marginVertical:10,
        textAlign:'center'
        

    }

})