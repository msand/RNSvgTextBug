import React from "react";

import Path from "../components/path";
import Path2 from "../components/toap01";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
};

export default () => (
  <div style={styles.container}>
    <div style={styles.welcome}>
      Welcome to Next.js!
    </div>
    <Path width="100%" />
    <Path2 width="100%" />
    <div style={styles.instructions}>
      To get started, run 'npm run dev' and edit pages/index.js
    </div>
  </div>
);
