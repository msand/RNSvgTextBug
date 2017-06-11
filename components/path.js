import React from "react";

import Svg, {
  Path,
  Defs,
  Text,
  TextPath
} from "svgs";

const Label = ({ name, x }) =>
  <Text x={x} y="12">
    <TextPath href="#textcurve">
      {name}
    </TextPath>
  </Text>;

export default () =>
  <Svg width="600" height="300" viewBox="-150 0 600 300">
    <Defs>
      <Path
        id="textcurve"
        d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
      />
    </Defs>
    <Path
      fill="none"
      stroke="#00f"
      d="M150 50c55.23 0 100 44.77 100 100s-44.77 100-100 100S50 205.23 50 150 94.77 50 150 50"
    />
    <Label x="25" name="Test 1" />
    <Label x="180" name="Test 2" />
    <Label x="485" name="Test 3" />
  </Svg>;
