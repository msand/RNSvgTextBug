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
  TextPath,
  Use
} from "svgs";

export default ({ width, height }) => (
  <Svg width={width} height={height} viewBox="0 0 1000 300" version="1.1">
    <Defs>
      <Path
        id="MyPath1"
        d="M 100 200
          C 200 100 300   0 400 100
          C 500 200 600 300 700 200
          C 800 100 900 100 900 100"
      />
    </Defs>

    <Use href="#MyPath1" fill="none" stroke="red" />
    <Text fontFamily="Verdana" fontSize={(typeof width === 'string' ? "42.5" : "50")} fill="blue" letterSpacing={(typeof width === 'string' ? "0" : "0")}>
      <TextPath href="#MyPath1">
        We go up, then we go down, then up again
      </TextPath>
    </Text>

    <Rect
      x="1"
      y="1"
      width="998"
      height="298"
      fill="none"
      stroke="blue"
      strokeWidth="2"
    />
  </Svg>
);
