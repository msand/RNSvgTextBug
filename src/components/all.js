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
  Request,
  Request2,
  OrigCoordSys
} from "./index";

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

export default ({ width, height, native, View, style }) => (
  <View style={style}>
    <OrigCoordSys width={width} height={height} native={native} />
    <Request width={width} height={height} native={native} />
    <Request2 width={width} height={height} native={native} />
    <ToapCircle width={width} height={height} native={native} />
    <Toap01 width={width} height={height} native={native} />
    <Toap02 width={width} height={height} native={native} />
    <Toap03 width={width} height={height} native={native} />
    <Toap04 width={width} height={height} native={native} />
    <TSpan01 width={width} height={height} native={native} />
    <TSpan02 width={width} height={height} native={native} />
    <TSpan04 width={width} height={height} native={native} />
    <TSpan05 width={width} height={height} native={native} />
    <Text01 width={width} height={height} native={native} />
    <Tref1 width={width} height={height} native={native} />
    <TextDecoration01 width={width} height={height} native={native} />
    <RtlComplex width={width} height={height} native={native} />
    <RtlText width={width} height={height} native={native} />
  </View>
);
