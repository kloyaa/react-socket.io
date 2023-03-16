import { io } from "socket.io-client";
import { useEffect } from 'react';

// const username = "kolya@hyperstacksinc.com";
const username = "allan_cheam@hyperstacksinc.com";

const socket = io("http://localhost:3000", {
  extraHeaders: {
   deviceid: "9473ff47d8dc55dd5dad004b8a18cff4ccd571a+2",
   username,
   biometric: true
  }
});

export default function Client2() {
  useEffect(() => {
    socket.on(username, (socket) => {
      console.log(socket);
    });
    return () => {
        socket.disconnect();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLIENT 2
        </a>
      </header>
    </div>
  );
}

