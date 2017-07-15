import React from "react";
import Svg, { G, Circle, Line, Defs, Rect, Path, Text, TextPath, TSpan } from "svgs";

export default ({ width, height, native }) =>
  <Svg width="120" height="120" viewBox="0 0 120 120">

    <Path d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110" stroke="grey" />


    <Text textAnchor="start"
          x="60" y="40">A</Text>

    <Text textAnchor="middle"
          x="60" y="75">A</Text>

    <Text textAnchor="end"
          x="60" y="110">A</Text>

    <Circle cx="60" cy="40" r="3" fill="red" />
    <Circle cx="60" cy="75" r="3" fill="red" />
    <Circle cx="60" cy="110" r="3" fill="red" />
  </Svg>
