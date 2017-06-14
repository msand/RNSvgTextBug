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
  <Svg height={height} width={width} version="1.1" viewBox="0 0 500 120">
    <Text
      id="parent"
      fill="red"
      fontFamily="Arial, sans-serif"
      fontSize="32"
      x="40"
      y="40"
    >
      Not rotation
      <TSpan id="child1" fill="orange" rotate="-10,-20,-30,-40">
        all characters have a
        <TSpan id="child2" fill="yellow" rotate="70,60,50,40,30,20,10">
          in
          <TSpan id="child3">the</TSpan>
        </TSpan>
        <TSpan id="child4" fill="orange" x="40" y="90">text</TSpan>
      </TSpan>
      <TSpan id="child5" fill="blue" rotate="-10">specified</TSpan>
    </Text>
    <Rect
      height="118"
      width="498"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
  </Svg>
);
