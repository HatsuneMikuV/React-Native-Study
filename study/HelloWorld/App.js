/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text style={styles.textStyle}>
        Hello world!
      </Text>
    );
  }
}


const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color:'#ff1e0c',
    marginTop:50,
    fontSize:50,
  }
});
