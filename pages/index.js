import React from "react";
import All from "../src/components/all";

export default () => (
  <All
    View={props => <div {...props} />}
    width="400px"
    height="400px"
    native={false}
  />
);
