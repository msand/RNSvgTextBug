/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import All from "./components/all";

const { width } = Dimensions.get("window");

const shadow = require('./components/shadow-min.png');

export default class RNSvgTextBug extends Component {
  render() {
    return (
      <ScrollView>
        <All View={View} width={width} height={width*0.3} native={true} shadow={shadow} />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("RNSvgTextBug", () => RNSvgTextBug);
