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