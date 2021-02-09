import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Button from "react-bootstrap/Button";
import "./message.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: "",
      count: 0,
      image: "",
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload);
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count,
      });
    });
  };

  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: "",
      });
    });
  };

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  handleDelete = (e) => {
    let messageId = e.target.id;
    console.log(messageId);
    this.props.deleteMessage(messageId).then(() => {
      this.fetchMessages();
    });
  };

  render() {
    let display = "";
    if (this.state.count === 0) {
      display = <div>No Messages Found</div>;
    }

    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        return (
          <div className="deleteHoover">
            <p key={value.id}>{value.text}</p>
            <button id={value.id} onClick={this.handleDelete} className="deleteButton">
              Delete
            </button>
            <br />
          </div>
        );
      });
    }

    return (
      <div className="Messages">
        <Card style={{ width: "18rem" }} bg="dark">
          <div className="ListMessage">
            {display}
            <div className="buttonDiv">
              <input
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Type your Messages"
              />
              <Button onClick={this.newMessageHandler}> Send </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
