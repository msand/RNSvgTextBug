import React from "react";
import All from "../src/components/all";

export default () =>
  <All
    View={props => <div {...props} />}
    width="100%"
    height="140px"
    native={false}
  />;
