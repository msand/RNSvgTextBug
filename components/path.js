import React from "react";

import Svg, {
    Circle,
    Image,
    LinearGradient,
    Path,
    Defs,
    Stop,
    Rect,
    Polygon,
    G,
    Text,
    TextPath
} from "svgs";

const Label = ({ name, x }) =>
    <Text
        fontSize="8"
        fontFamily="sans-serif"
        fill="gray"
        strokeWidth="10px"
        x={x}
        y="16"
    >
      <TextPath href="#textcurve">
          {name.toUpperCase()}
      </TextPath>
    </Text>;

export default () =>
    <Svg
        version="1.1"
        viewBox="0 0 841.9 595.3"
        x="0px"
        y="0px"
        xmlSpace="preserve"
        width="450"
        height="256.9771"
    >
      <Defs>
        <Path
            id="textcurve"
            fill="none"
            stroke="#00f"
            d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
        />
      </Defs>
      <G translateX="100" opacity="0.5">
        <G scale="2.05">
          <Path
              fill="none"
              stroke="#00f"
              d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
          />
        </G>
      </G>
      <G translateX="100" opacity="0.9">
        <G scale="2.05">
          <Label x="25" name="Test1" />
          <Label x="90" name="Test2" />
          <Label x="180" name="Test3" />
          <Label x="400" name="Test4" />
          <Label x="485" name="Test5" />
          <Label x="575" name="Test6" />
        </G>
      </G>
    </Svg>;
