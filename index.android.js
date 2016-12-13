/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, Text, Navigator, TouchableHighlight} from 'react-native';
import {AgregarMedicamento} from "./app/view/agregar_medicamento";
import {MainMenu} from "./app/view/main_menu";
import {Screen1} from "./app/view/navigation_page_1";
import {Screen2} from "./app/view/navigation_page_2";

export default class AwesomeProject extends Component {

	render() {
	    return (
	      <Navigator
	        initialRoute={{id: 0 }}
	        renderScene={(route, nav) =>
        		{return this.renderScene(route, nav)}} />
	    );
  	};

  	renderScene(route, navigator) {
  		if (route.id === 0) {
	      return <MainMenu navigator={navigator} />
	    } 
	    if (route.id === 1) {
	      return <Screen1 navigator={navigator} />
	    } if (route.id === 2) {
	    	return <Screen2 navigator={navigator} />
	    }
	  };
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
