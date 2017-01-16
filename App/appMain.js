import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Easing,
  Dimensions,
}from 'react-native';

import { TimingDriver, FadeIn } from '@shoutem/animation';
const imageSource = {uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}



class AppMain extends Component{


  driver = new TimingDriver({
    duration: 1000,    // default: 250
    easing: Easing.in, // default: Easing.cubic
    delay: 200,        // default: 0
  })

  runAnimation = () => this.driver.runTimer(1);
  resetAnimation = () => this.driver.runTimer(0);


  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.runAnimation}>
          <Text style={styles.text}>Run Amination</Text>
        </TouchableOpacity>

        <FadeIn driver={this.driver}>
          <Image
            style={styles.image}
            source={imageSource}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.resetAnimation}>
            <Text style={styles.text}>
              Reset Animation
            </Text>
          </TouchableOpacity>
        </FadeIn>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
  },
  button: {
    margin: 15,
    padding: 30,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});


module.exports = AppMain;
