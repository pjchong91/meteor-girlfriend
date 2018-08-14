import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

class Hub extends Component {
  render() {
    return <h1>hello</h1>;
  }
}

export default withTracker(() => {})(Hub);
