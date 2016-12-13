/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Button} from 'react-native';

export class Screen1 extends Component{

  render() {
    return (
      <View>
        <Text>Screen 1</Text>
        <TouchableHighlight onPress={() => {
          this.props.navigator.push({id: 2});
        }}>
        <Text>Press go to to screen 2</Text>
        </TouchableHighlight>

        <Button
          onPress={this.onButtonPress}
          title="Main Menu"
          color="#841584"
        />
      </View>

   
    );
  };

  onButtonPress = () => {
    this.props.navigator.push({id: 0});
  };
};