import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log("testing function front end")
    socket.on("FromAPI", data => {
      console.log(data)
      setResponse(data);
    });
    socket.emit('chat message', "testing front end function")
  }, []);


  return (
    <form >React App
      <input type="text"></input>
    </form>




  );
}

export default App;
