import React from 'react';
import Svg, {Defs, Rect, Path, Text, TextPath, TSpan} from "svgs";

export default ({width, height}) => (
    <Svg
        width="660"
        height="220"
        viewBox="0 0 660 220"
    >
        <Defs>
            <Path id="text-path" d="M225,150 v-80 h240 v80 Z"/>
        </Defs>
        <Path d="M225,150 v-80 h240 v80 Z" stroke="#00f" strokeWidth="1px" fill="none"/>

        <Text stroke="#000" fontFamily="Arial" fontSize="24" letterSpacing={(typeof width === 'string' ? "0" : "0")}
              wordSpacing="0">
            <TextPath href="#text-path" startOffset="20%">
                SVG Text on a linear path
            </TextPath>
        </Text>
    </Svg>
)