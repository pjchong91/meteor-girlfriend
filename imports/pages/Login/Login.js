import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import AccountsUIWrapper from './../../ui/components/AccountsWrapper'
import './styles.css'

class Login extends Component {
  render() {
    return (
      <div>
        <Typography variant="display2" gutterBottom>
          Girlfriend Points
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Helping you remember good times
        </Typography>
    
        <AccountsUIWrapper/>
 
      </div>
    );
  }
}
// export default Login;
export default withTracker(() => {
    return{
        currentUser:Meteor.user()
    }
})(Login);
