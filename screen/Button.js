import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

function AppButton(props) {
  const status = props.isTrue;

  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      buttonStyle={
        status == '1' ? styles.backgroundwhite : styles.backgroundred
      }
      titleStyle={status == '1' ? styles.textred : styles.textwhite}
    />
  );
}

const styles = StyleSheet.create({
  backgroundwhite: {
      width:"80%",
    borderRadius: 10,
    backgroundColor: '#47C2B6',
    paddingHorizontal: 25,
    borderWidth:1,
    borderColor:'white',
    justifyContent:'center',
    alignSelf:'center',
    marginHorizontal:5,
  },
  textred: {
    textTransform: 'uppercase',
    fontSize: 19,
    color: 'white',
  },
//   backgroundred: {
//     borderRadius: 10,
//     backgroundColor: '#A40F13',
//     paddingHorizontal: 25,
//     marginHorizontal:5
//   },
//   textwhite: {
//     textTransform: 'uppercase',
//     fontSize: 19,
//     color: 'white',
//   },
});

export default AppButton;