import React from "react";
import Svg, { Defs, Rect, Path, Text, TextPath, TSpan, Use } from "svgs";
// TODO investigate letter-spacing and start-offset
export default ({ width, height, native }) =>
  <Svg width={width} height={width * 440 / 660} viewBox="180 0 330 220">
    <Defs>
      <Path id="textpath" d="M225,150 v-80 h240 v80 Z" />
    </Defs>
    <Use
      href="#textpath"
      stroke="#00f"
      strokeWidth="1px"
      fill="none"
    />
    <Text
      stroke="#000"
      fontFamily="AvenirNextLTPro-Regular"
      fontSize="24"
      wordSpacing="0"
      letterSpacing="0"
      x="50"
      y="5"
    >
      <TextPath href="#textpath" startOffset="0%">
        <TSpan dx="70" dy="-25">
        SVG Text on a linear path test, testing 1, 2, 3, fi.
        </TSpan>
      </TextPath>
    </Text>
  </Svg>;
