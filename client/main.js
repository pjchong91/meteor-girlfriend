import React from "react";
import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./main.html";

import App from "../imports/ui/containers/App";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  registerServiceWorker();
});
