import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import MessageList from "./Components/MessageList";
import Login from "./Components/Login";
import UserList from "./Components/UserList";

/*
Data:
  - Username
  - Status: online/offline
*/

class App extends Component {
  state = { username: "martha", avatar: "", status: "online", userList: [] };
  render() {
    return (
      <div className="App">
        <Title />
        <Login />
        <UserList />
        {this.state.status === "online" ? <MessageList /> : <></>}
      </div>
    );
  }
}

export default App;
