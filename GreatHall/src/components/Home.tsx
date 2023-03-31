import '../assets/styles/App.css';
import Container from 'react-bootstrap/Container';
import JoinGameForm from './forms/JoinGameForm';
import { useSelector, shallowEqual } from "react-redux"


const Home: React.FC = () => {

  const gameState: GameState = useSelector(
    (state: AllState) => {
      return state.gameState
    },
    shallowEqual
  )

  return (
    <Container className="p-3">
      <JoinGameForm gameState={gameState} />
    </Container>
  );
}

export default Home;



  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res: { json: () => any; }) => res.json())
  //     .then((data: { message: React.SetStateAction<null>; }) => setData(data.message));
  // }, []);


/* <Container className="p-5 mb-4 bg-light rounded-3">
<h1 className="header">
  Welcome To React-Bootstrap TypeScript Example
</h1>
</Container>
<h2>Buttons</h2>
<p>{!data ? "Loading..." : data}</p>
<Button variant="primary" onClick={() => {SocketUtils.getInstance().send()}}>Primary</Button>{' '}
<h2>Toasts</h2>
<ToastsShowcase /> */