/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Picker, UIExplorerPage, UIExplorerBlock} from 'react-native';

export class AgregarMedicamento extends Component {

  state = {
    language: "espanhol",
    mode: Picker.MODE_DROPDOWN
  };

  render() {
    return (

      <View style={styles.form}>

        <Text style={styles.formInput}>Medicamento:</Text>

        <Picker style={styles.formInput}
          selectedValue={this.state.language}
          mode = {this.state.mode}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  picker: {
    width: 100,
  },
  form: {
    flex: 1,
    flexDirection: "row"
  },
  formInput: {
    width: 200,
    height: 50
  }
});
