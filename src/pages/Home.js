import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


    
  


class Home extends React.Component {
  render() {
    return (
      <Container fluid color="red">
  <Row color = "red">
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </div>
      </Row>
</Container>
    );
  }
}


export default userIsNotAuthenticated(Home);
