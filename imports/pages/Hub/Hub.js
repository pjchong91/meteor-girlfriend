import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

class Hub extends Component {
  render() {

    return (
      this.props.currentUser ? 
      <h1>hello {this.props.currentUser.emails[0].address}</h1> : ''
    );
  }
}
export default withTracker(() => {
  return{
      currentUser:Meteor.user()
  }
})(Hub);