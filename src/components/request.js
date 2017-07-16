import React from "react";
import Svg, { Rect, Text, TSpan } from "svgs";

export default class App extends React.Component {
  render() {
    return (
      <Svg width="120" height="67" viewBox="0 0 120 67">
        <Rect fill="blue" x="0" y="25" width="5" height="42" />
        <Text
          y="20"
          dx="5 5"
          fontFamily="AvenirNextLTPro-Regular"
          fontSize={15}
          letterSpacing="2"
          wordSpacing="0"
        >
          <TSpan x="10" letterSpacing="0">
            tspan line 1
          </TSpan>
          <TSpan x="10" dy="15">
            tspan line 2
          </TSpan>
          <TSpan x="10" dx="10" dy="15">
            tspan line 3
          </TSpan>
        </Text>
      </Svg>
    );
  }
}
