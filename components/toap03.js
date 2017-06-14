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
  <Svg height={height} width={width} version="1.1" viewBox="0 0 1000 300">
    <Defs>
      <Path
        id="MyPath"
        d="M 100 200
               C 200 100 300   0 400 100
               C 500 200 600 300 700 200
               C 800 100 900 100 900 100"
      />
    </Defs>
    <Path d="M 100 200
               C 200 100 300   0 400 100
               C 500 200 600 300 700 200
               C 800 100 900 100 900 100" />
    <Text fill="blue" fontFamily="Verdana" fontSize="42.5" />
    <Rect
      height="298"
      width="998"
      fill="none"
      stroke="blue"
      strokeWidth="2"
      x="1"
      y="1"
    />
  </Svg>
);
