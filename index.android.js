/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
// Text,
View
} from 'react-native';

var AppMain = require('./App/appMain');

export default class shoutemAnimationRN extends Component {
render() {
  return (
    <View style={styles.container}>
      <AppMain/>
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  // justifyContent: 'center',
  // alignItems: 'center',
  backgroundColor: 'white',
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
},
});


// import { appMain } from "./App/appMain";



AppRegistry.registerComponent('shoutemAnimationRN', () => shoutemAnimationRN);
