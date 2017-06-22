import React from "react";
import All from "../src/components/all";

if (typeof document !== "undefined" && document.body && document.body.style) {
  document.body.style.margin = 0;
}

export default () => (
  <All
    View={props => <div {...props} />}
    width="100%"
    height={150}
    native={false}
  />
);
