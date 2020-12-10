import React from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import Cards1 from './Cards1';
import tem from '../img/tem.jpg'
import ph from '../img/fyp/ph-meter.png'
import water from '../img/fyp/water level.png'
import mineral from '../img/fyp/mineral.png'
import tech from '../img/fyp/technology.png'
import avatar from '../img/fyp/avatar.png'
import {Header} from 'react-native-elements';


const Home =({navigation}) => {


        return(
            <ImageBackground style={{width:'100%' , height:'100%'}}  >

<Header
        backgroundColor="#47C2B6"
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          size:40,
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{
          text: 'Home',
          style: {color: '#fff', fontSize: 24},
        }}
      />
<View style={styles.mainBox}>

            <View style={styles.box}>


            <Cards1 title="TEMPERATURE" image={tem} onPress={()=> navigation.navigate('Temperature')}  />
            <Cards1 title="PH METER" image={ph} onPress={()=> navigation.navigate('Ph')} />
            </View>

            <View style={styles.box}>
           
           <Cards1 title="WATER LEVEL" image={water} onPress={()=> navigation.navigate('Waterlevel')} />
           <Cards1 title="MINERALS" image={mineral} onPress={()=> navigation.navigate('Mineral')} />
           </View>

           
           <View style={styles.box}>
           
           <Cards1 title="ELECTRIC MOTOR" image={tech} onPress={()=> navigation.navigate('Motor')} />
           <Cards1 title="TECHNICAL SUPPORT" image={avatar} onPress={()=> navigation.navigate('Technical')} />
           </View>
            
            </View>
   </ImageBackground>

)}

export default Home;

const styles=StyleSheet.create({

    mainBox:{
        width: '100%',
        display:'flex',
       flexDirection:'column',
    //    padding:0,
    //    marginTop: '6rem',
       justifyContent:'center',
       alignItems:'center'
 
    },

    box:{
        
        display:'flex',
       flexDirection:'row',
        
       padding:0
    
        
    },
    

})