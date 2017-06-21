/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import {
    TextDecoration01,
    ToapCircle,
    RtlComplex,
    RtlText,
    TSpan01,
    TSpan02,
    TSpan03,
    TSpan04,
    TSpan05,
    Toap01,
    Toap02,
    Toap03,
    Toap04,
    Text01,
    Tref1,
} from "./components/index";
import Request from './components/request';
import Request2 from './components/request2';

const { width } = Dimensions.get("window");

// <TSpan03 width={width} height={width * 0.3} />
/* Fails with:
Invalid float: "300 350 400 450 500 550 600 650"
invalidReal
    StringToReal.java:63
initialParse
    StringToReal.java:164
parseFloat
    StringToReal.java:323
*/

export default class RNSvgTextBug extends Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Request width={width} height={width * 0.3}/>
        <Request2 width={width} height={width * 0.3} />
        <ToapCircle width={width} height={width * 0.3} native={true}/>
        <Toap01 width={width} height={width * 0.3} />
        <Toap02 width={width} height={width * 0.3} />
        <Toap03 width={width} height={width * 0.3} />
        <Toap04 width={width} height={width * 0.3} />
        <TSpan01 width={width} height={width * 0.3} />
        <TSpan02 width={width} height={width * 0.3} />
        <TSpan04 width={width} height={width * 0.3} />
        <TSpan05 width={width} height={width * 0.3} />
        <Text01 width={width} height={width * 0.3} />
        <Tref1 width={width} height={width * 0.3} />
        <TextDecoration01 width={width} height={width * 0.3} />
        <RtlComplex width={width} height={width * 0.3} />
        <RtlText width={width} height={width * 0.3} />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("RNSvgTextBug", () => RNSvgTextBug);
