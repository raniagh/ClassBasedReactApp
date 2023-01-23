import { Component } from "react";
import classes from "./User.module.css";

//Class based component
class User extends Component {
  componentWillUnmount() {
    console.log("component will unmount");
  }
  //render is a class method used to render some JSX
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
//Functional based component
/* const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
}; */

export default User;
