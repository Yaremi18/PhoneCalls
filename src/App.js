/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import KeyBoard from './components/KeyBoard';
import SwichExample from './components/ExamplePosition';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <SwichExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex:1
  },
});
