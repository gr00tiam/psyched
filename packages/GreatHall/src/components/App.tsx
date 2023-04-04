import '../assets/styles/App.css';
import Menu from './navigation/Navbar';
import Home from './pages/Home';
import SnakesAndLadder from './games/SnakesAndLadder';
import TempleOfDoom from './games/TempleOfDoom';

import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import * as React from "react"
import { Container } from 'react-bootstrap';
// import "../assets/styles/App.css"


const App: React.FC = () => {

  return (
    <Container>
      <Router>
        <Menu />
        <Container className='d-flex align-items-center justify-content-center'>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/menu2" element={<SnakesAndLadder header={"Hello"} />}>
            </Route>
            <Route path="/menu3" element={<TempleOfDoom />}>
            </Route>
          </Routes>
        </Container>
      </Router >
    </Container>
  );
}

export default App;


// //props object
// type AppProps = {
//   // counter: number;
// }
// //state object
// type AppState = {
// }

// class App extends Component<AppProps, AppState> {

//   // state: Result = {
//   // number: 0,
//   // };



//   async componentDidMount() {
//     console.log("mounted");
//     await SocketHelper.getInstance().connect().catch((err: any) => { console.log(err) })
//   }



