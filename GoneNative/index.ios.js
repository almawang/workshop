/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

class GoneNative extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HelloWorld,
          title: 'Some hello world messages',
        }}
        style={styles.mainContainer}
      />
    );
  }
}


// refactored HelloWorld class, also added styling to View component
class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.red}>{"\n"}Hello world!</Text>
        <Text style={styles.bigblue}>Hey there</Text>
        <Text style={[styles.bigblue, styles.red]}>Its a great day</Text>
        <Text style={[styles.red, styles.bigblue]}>truly great</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('GoneNative', () => GoneNative);
