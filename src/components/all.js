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
  TSpan06,
  Toap01,
  Toap02,
  Toap03,
  Toap04,
  Text01,
  Tref1,
  Request,
  Request2,
  OrigCoordSys,
  InitialCoords,
  Nested,
  NewCoordSys,
  PreserveAspectRatio,
  RotateScale,
  Skew,
  Units,
  ViewBox,
  Pallura,
  Anchor
} from "./index";

export default ({ width, height, native, View, style, shadow }) =>
  <View style={{ backgroundColor: "#ffffff", ...style }}>
    <Units width={width} height={height} native={native} />
    <Anchor width={width} height={height} native={native} />
    <Pallura width={width} height={height} native={native} shadow={shadow} />
    <InitialCoords width={width} height={height} native={native} />
    <OrigCoordSys width={width} height={height} native={native} />
    <Nested width={width} height={height} native={native} />
    <NewCoordSys width={width} height={height} native={native} />
    <RotateScale width={width} height={height} native={native} />
    <Skew width={width} height={height} native={native} />
    <ViewBox width={width} height={height} native={native} />
    <Request width={width} height={height} native={native} />
    <Request2 width={width} height={height} native={native} />
    <ToapCircle width={width} height={height} native={native} />
    <Toap01 width={width} height={height} native={native} />
    <Toap02 width={width} height={height} native={native} />
    <Toap03 width={width} height={height} native={native} />
    <Toap04 width={width} height={height} native={native} />
    <TSpan01 width={width} height={height} native={native} />
    <TSpan02 width={width} height={height} native={native} />
    <TSpan03 width={width} height={height} native={native} />
    <TSpan04 width={width} height={height} native={native} />
    <TSpan05 width={width} height={height} native={native} />
    <TSpan06 width={width} height={height} native={native} />
    <Text01 width={width} height={height} native={native} />
    <Tref1 width={width} height={height} native={native} />
    <TextDecoration01 width={width} height={height} native={native} />
    <RtlComplex width={width} height={height} native={native} />
    <RtlText width={width} height={height} native={native} />
  </View>;
