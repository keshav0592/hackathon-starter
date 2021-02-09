import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";
import { Card } from "react-bootstrap";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <Card style={{ width: "18rem" }} bg="dark">
          <Card.Body>
            <Card.Title>Your favorite Microblogging platform</Card.Title>

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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
