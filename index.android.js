/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {AgregarMedicamento} from "./app/view/agregar_medicamento";

export default class AwesomeProject extends Component {
  render() {
    return (
      <AgregarMedicamento/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
