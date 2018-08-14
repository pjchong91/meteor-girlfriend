import React from "react";
import { Meteor } from "meteor/meteor";
import { Redirect, Route, Switch } from "react-router";
import Login from '../pages/Login'
import Hub from "../pages/Hub";
import AddEvents from '../pages/AddEvents'

export default () => {
  return(  
    <div>
    <Route exact path='/welcome' component={Login}/>
  <Route exact path="/" component={Hub} />
  <Route exact path='/add-events' component={AddEvents}/>
  </div>
)

};
