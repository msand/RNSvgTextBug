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
        id="MyPath3"
        d="M 100 200
               C 200 100 300   0 400 100
               C 500 200 600 300 700 200
               C 800 100 900 100 900 100"
      />
    </Defs>
    <Use href="#MyPath3" fill="none" stroke="red"/>
      <Text fill="blue" fontFamily="Verdana" fontSize={(typeof width === 'string' ? "42.5" : "50")} letterSpacing={(typeof width === 'string' ? "0" : "0")} kerning="0">
          <TextPath href="#MyPath3" startOffset={(typeof width === 'string' ? "80%" : "66%")}>
              We go up, then we go down, then up again
          </TextPath>
      </Text>
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
