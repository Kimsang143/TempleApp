'use strict';
import React, {Component} from "react";
import {View, Animated, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Index extends Component {
  render() {
    return (
      <Animated.View
        style={[{
          position: 'absolute',
          right: 0,
          bottom: Platform.OS == 'android' ? 40 : 20,
          elevation: 5,
          zIndex: 9999,
        }, this.props.css]}>
        <Icon.Button onPress={this.props.onUpdate}
                     name="ios-arrow-dropup-circle"
                     size={36}
                     borderRadius={16}
                     backgroundColor={"transparent"}
                     iconStyle={{zIndex: 9999} }
                     color="rgba(0,0,0, .8)" />
      </Animated.View>
    );
  }
}
