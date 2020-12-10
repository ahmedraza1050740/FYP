// import React from 'react';
// import Signup from './Signup';
// import Login from './login';
// import Welcome from './Welcome';
// import Home from './screen/Home';
// import Temperature from './screen/Temperature';
// import Ph from './screen/Ph';
// import Waterlevel from './screen/Waterlevel';
// import Mineral from './screen/Mineral';
// import Motor from './screen/Motor';
// import Cards from './screen/Cards';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet,Button, Text, View, ImageBackground } from 'react-native';

// const Stack = createStackNavigator();
// export default function App() {
//   return (
   
// <View  style={{  width:'100%' , height:'100%'}}>
// <NavigationContainer>
// <Stack.Navigator screenOptions={{headerShown:false}}> 
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Temperature" component={Temperature} />
//         <Stack.Screen name="Ph" component={Ph} />
//         <Stack.Screen name="Waterlevel" component={Waterlevel} />
//         <Stack.Screen name="Mineral" component={Mineral} />
//         <Stack.Screen name="Motor" component={Motor} />
//       </Stack.Navigator>
// </NavigationContainer>
//       </View>
//   );
// }




// ==============================afif==========================


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Signup'
import Login from './login';
import Welcome from './Welcome';
import Home from './screen/Home';
import Temperature from './screen/Temperature';
import Ph from './screen/Ph';
import Waterlevel from './screen/Waterlevel';
import Mineral from './screen/Mineral';
import Motor from './screen/Motor';

import {DrawerContent} from './screen/Content'
import Technical from './screen/Technical';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
        
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Temperature" component={Temperature} />
        <Drawer.Screen name="Ph" component={Ph} />
        <Drawer.Screen name="Waterlevel" component={Waterlevel} />
        <Drawer.Screen name="Mineral" component={Mineral} />
        <Drawer.Screen name="Motor" component={Motor} />
        <Drawer.Screen name="Technical" component={Technical} />

        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
