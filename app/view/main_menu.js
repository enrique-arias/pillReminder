/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableHighlight}from 'react-native';

export class MainMenu extends Component{

  render() {
    return (
      <View>
        <Text>Welcome to the application</Text>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({id: 1});
        }}>
        <Text>Press go to to screen 1</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({id: 2});
        }}>
        <Text>Press go to to screen 2</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
