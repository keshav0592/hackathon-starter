import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
<<<<<<< HEAD
=======
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> a4aa2f072688d1ea36fb9d4d8d32399e4b5235d4
import "./LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
<<<<<<< HEAD
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          
          <br/>
          <br/>
          <br/>
          <Button variant="primary" type="submit" disabled={loading}>
            Login
          </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        
        <h2>HOME IS HOME</h2>
      <img src ="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" height="200" width="400" backgroung-color="red"></img>

=======
        <Card style={{ width: "18rem" }} bg="dark">
          <Card.Body>
            <Card.Title>Stay Connected and Happy Hacking! </Card.Title>
            <hr />
            <form id="login-form" onSubmit={this.handleLogin}>
              {/* <label htmlFor="username">Username</label> */}
              <div>
                <input
                  type="text"
                  name="username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </div>
              <div>
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </div>
              <hr />
              <Button variant="info" type="submit">
                Sign In
              </Button>{" "}
              {loading && <Spinner name="circle" color="blue" />}
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </form>
            <Button variant="info" type="submit">
              <Link to="/NewAccount"> Sign Up</Link>
            </Button>{" "}
          </Card.Body>
        </Card>
>>>>>>> a4aa2f072688d1ea36fb9d4d8d32399e4b5235d4
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
