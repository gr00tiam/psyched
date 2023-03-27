import * as S from './styles';

// import Logo from '../../assets/logo.png';
// import IconReact from '../../assets/react.svg';
// import IconMegamen from '../../assets/megamen.png';
// import IconMario from '../../assets/mario.png';
// import IconTurtle from '../../assets/turtle.png';

import { Route, Routes } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from '../Home';
import SnakesAndLadder from '../games/SnakesAndLadder';
import TempleOfDoom from '../games/TempleOfDoom';

type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <Router>
      <S.Ul open={props.open}>
        {/* <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} /> */}

        <NavLink to="/menu1" >
          <S.Li>Home</S.Li>
        </NavLink>
        <NavLink to="/menu2">
          <S.Li>Snakes And Ladder</S.Li>
        </NavLink>
        <NavLink to="/menu3">
          <S.Li>Temple Of Doom</S.Li>
        </NavLink>
      </S.Ul>


      <Routes>
        <Route path="/menu1" element={<Home />}>
        </Route>
        <Route path="/menu2" element={<SnakesAndLadder />}>
        </Route>
        <Route path="/menu3" element={<TempleOfDoom />}>
        </Route>
      </Routes>
    </Router >
  )
}

export default RightNav