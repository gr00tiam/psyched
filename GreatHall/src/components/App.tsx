import { Component } from 'react';
import '../assets/styles/App.css';
import Menu from './navigation/Navbar';
import Home from './Home';
import SnakesAndLadder from './games/SnakesAndLadder';
import TempleOfDoom from './games/TempleOfDoom';

import SocketHelper from './communication/SocketHelper';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";


//props object
type AppProps = {
  // counter: number;
}
//state object
type AppState = {
}

class App extends Component<AppProps, AppState> {

  // state: Result = {
  // number: 0,
  // };



  async componentDidMount() {
    console.log("mounted");
    await SocketHelper.getInstance().connect().catch((err: any) => { console.log(err) })
  }

  render() {
    return (
      <div className="App" >
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
}

export default App;