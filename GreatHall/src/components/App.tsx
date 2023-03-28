import '../assets/styles/App.css';
import Menu from './navigation/Navbar';
import Home from './Home';
import SnakesAndLadder from './games/SnakesAndLadder';
import TempleOfDoom from './games/TempleOfDoom';

import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import { io } from "socket.io-client";

function App() {

  const socket = io("http://localhost:3001");

  socket.emit("hello");

  return (
    <div className="App">
      <Router>
      <Menu />
      <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/menu2" element={<SnakesAndLadder header={"Hello"} />}>
          </Route>
          <Route path="/menu3" element={<TempleOfDoom />}>
          </Route>
        </Routes>
        </header>
        </div>
      </Router >
    </div>
  );
}

export default App;