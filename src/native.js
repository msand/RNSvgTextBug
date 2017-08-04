/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import RNFS from 'react-native-fs';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Platform,
} from "react-native";
import base64 from 'base64-arraybuffer';
import All from "./components/all";

import { takeSnapshot, dirs } from "react-native-view-shot";

const opentype = require('opentype.js');

const { PictureDir } = dirs;

const { width, height } = Dimensions.get("window");

const shadow = require("./components/shadow-min.png");

const font = 'AvenirNextLTPro-Regular';

require('./cycle');

export default class RNSvgTextBug extends Component {
  state = {fontData: null};
  constructor() {
    super();
    if (Platform.OS === 'android') {
      RNFS
        .readFileAssets(`fonts/${font}.otf`, 'base64')
        .then(res => opentype.parse(base64.decode(res)))
        .then(fontData => {
          console.log(fontData);
          this.setState({fontData: JSON.decycle(fontData)});
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <ScrollView
        ref={ref => (this.ref = ref)}
        style={{ backgroundColor: "#ffffff" }}
      >
        <All
          View={View}
          width={width}
          height={height}
          native={true}
          shadow={shadow}
          fontData={this.state.fontData}
        />
        <Button
          title="Snapshot"
          onPress={() => {
            takeSnapshot(this.ref, {
              format: "png",
              path: PictureDir + "/foo.png",
              snapshotContentContainer: true
            }).then(
              uri => console.log("Image saved to", uri),
              error => console.error("Oops, snapshot failed", error)
            );
          }}
        />
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("RNSvgTextBug", () => RNSvgTextBug);
