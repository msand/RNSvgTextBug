import React from "react";

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
} from "../src/components";
import Request from '../src/components/request';

const styles = {
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
};

export default () => (
  <div style={styles.container}>
    <div style={styles.welcome}>
      Welcome to Next.js!
    </div>
    <Request />
    <ToapCircle width="100%" height={150} />
    <Toap01 width="100%" height={150} />
    <Toap02 width="100%" height={150} />
    <Toap03 width="100%" height={150} />
    <Toap04 width="100%" height={150} />
    <TSpan01 width="100%" height={150} />
    <TSpan02 width="100%" height={150} />
    <TSpan03 width="100%" height={150} />
    <TSpan04 width="100%" height={150} />
    <TSpan05 width="100%" height={150} />
    <Text01 width="100%" height={150} />
    <Tref1 width="100%" height={150} />
    <TextDecoration01 width="100%" height={150} />
    <RtlComplex width="100%" height={150} />
    <RtlText width="100%" height={150} />
    <div style={styles.instructions}>
      To get started, run 'npm run dev' and edit pages/index.js
    </div>
  </div>
);
