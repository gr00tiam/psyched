import * as S from '../styled/styles';

import { NavLink } from "react-router-dom";


type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    
      <S.Ul open={props.open}>
        {/* <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} /> */}
        <NavLink to="/" >
          <S.Li>Home</S.Li>
        </NavLink>
        <NavLink to="/menu2">
          <S.Li>Snakes And Ladder</S.Li>
        </NavLink>
        <NavLink to="/menu3">
          <S.Li>Temple Of Doom</S.Li>
        </NavLink>
      </S.Ul>

  )
}

export default RightNav