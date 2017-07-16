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

const Title = props => <Text {...props} />;

export default ({ width, height }) =>
  <Svg
    height={height}
    width={width}
    version="1.1"
    viewBox="0 0 400 400"
    xmlLang="fa"
    direction="rtl"
  >
    <Title direction="ltr" lang="en">
      Right-to-left Text
    </Title>
    <Text fontSize={20} x="200" y="200">
      داستان SVG 1.1 SE طولا ني است.
    </Text>
  </Svg>;
