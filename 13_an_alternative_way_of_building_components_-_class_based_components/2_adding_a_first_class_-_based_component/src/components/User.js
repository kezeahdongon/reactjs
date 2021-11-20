import { Component } from 'react';

import classes from './User.module.css';

class User extends Component{
  componentWillUnmount() {
    console.log('User will unmount!');
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
} // the render() here does not receives props instead we import {component} from 'react' and then extend components

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
