import React from "react";

import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TSpan,
  TextPath,
  Use
} from "svgs";

export default ({ width, height }) => (
  <Svg height={height} width={width} version="1.1" viewBox="0 0 1200 400">
    <Rect
      height="398"
      width="1198"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
    <G fill="blue" fontSize="60" stroke="red" strokeWidth="1">
      <Text x="100" y="75">Normal text</Text>
      <Text x="100" y="165">Text with line-through</Text>
      <Text x="100" y="255">Underlined text</Text>
      <Text x="100" y="345">
        <TSpan>One</TSpan>
        <TSpan fill="yellow" stroke="purple">word</TSpan>
        <TSpan fill="yellow" stroke="black">has</TSpan>
        <TSpan fill="yellow" stroke="darkgreen">different</TSpan>
        <TSpan fill="yellow" stroke="blue">underlining</TSpan>
      </Text>
    </G>
  </Svg>
);
