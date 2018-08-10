'use strict';

import React, {Component} from "react";
import {TabNavigator, StackNavigator} from 'react-navigation';
import {View, Platform} from "react-native";
import MainNavigator from '@navigation';


export default class RootRouter extends Component {

  render() {
  	return <MainNavigator />
  }
}