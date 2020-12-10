
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
              <Drawer.Section>

              <Avatar.Image size={120} style={{alignSelf:'center', marginVertical:20}} source={require('../assets/tem.jpg')}  />

              <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold' , color:'#117A65'}}  >Ahmed Raza</Text>
              </Drawer.Section>
         
            <Drawer.Section>
            <DrawerItem
            
            icon={({size}) => (
              <Icon name="home-outline" color="#B41116" size={size} />
            )}
            label="Home"
            labelStyle={styles.labelstyle}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
            </Drawer.Section>
            <Drawer.Section>
            <DrawerItem
            
            icon={({size}) => (
              <Icon name="home-outline" color="#B41116" size={size} />
            )}
            label="Home"
            labelStyle={styles.labelstyle}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
            </Drawer.Section>
            <DrawerItem
            
            icon={({size}) => (
              <Icon name="home-outline" color="#B41116" size={size} />
            )}
            label="Home"
            labelStyle={styles.labelstyle}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
            </Drawer.Section>
            
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  image: {
    height: 140,
    opacity: 0.8,
  },
  info: {
    marginLeft: 15,
    flexDirection: 'column',
    position: 'absolute',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'white',
    alignSelf: 'center',
  },
  caption: {
    fontSize: 18,
    lineHeight: 18,
    color: 'white',
    alignSelf: 'center',
  },
  labelstyle: {
    fontSize: 17,
  },
  drawerSection: {
    marginTop: 10,
  },
});