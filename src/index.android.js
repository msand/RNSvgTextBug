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
  ScrollView,
  Button
} from "react-native";
import All from "./components/all";

import { takeSnapshot, dirs } from "react-native-view-shot";

const { PictureDir } = dirs;

const { width } = Dimensions.get("window");

const shadow = require("./components/shadow-min.png");

export default class RNSvgTextBug extends Component {
  render() {
    return (
      <ScrollView
        ref={ref => (this.ref = ref)}
        style={{ backgroundColor: "#ffffff" }}
      >
        <All
          View={View}
          width={width}
          height={150}
          native={true}
          shadow={shadow}
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
