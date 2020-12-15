import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Components/Title";
import MessageList from "./Components/MessageList";
import Login from "./Components/Login";
import UserList from "./Components/UserList";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";



function App() {

  const [response, setResponse] = useState("");
  const [username, setUsername] = useState("martha");
  const [avatar, setAvatar] = useState("");
  const [status, setStatus] = useState("online");
  const [userList, setUserList] = seState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    })
  }, []);

  reur(
    <div className="App">
      <Title />
      <Login />
      <UserList />
      {this.state.status === "online" ? <MessageList /> : <></>}
    </div>
  );

}

export default App;
