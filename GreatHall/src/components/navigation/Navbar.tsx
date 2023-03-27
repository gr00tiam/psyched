// import * as S from './styles';

// import Logo from '../../assets/logo.png';
import Burger from './Burger';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <Burger />
      {props.children}
    </>
  )
}