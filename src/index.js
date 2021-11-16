import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom"
import Main from './Main';
import Create from './Create';
import Game from "./Game"
import { io } from "socket.io-client"

const socket = io("https://ultimate-tic-tac-toe-lib.herokuapp.com/");
//const socket = io("http://localhost:5000");

ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main socket={socket}/>}/>
        <Route path="/create" element={<Create socket={socket}/>}/>
        <Route path="/games/:gameId" element={<Game socket={socket}/>}/>
      </Routes>
    </HashRouter>,
  document.getElementById('root')
);
