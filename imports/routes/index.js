import React from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";

import Hub from "../pages/Hub";

export default () => {
  <Route exact path="/" component={Hub} />;
};
