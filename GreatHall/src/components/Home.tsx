import '../assets/styles/App.css';
import Container from 'react-bootstrap/Container';
import { Component } from 'react';
import JoinGameForm from './forms/JoinGameForm';

type HomeProps = {
};

type HomeState = {
}

class Home extends Component<HomeProps, HomeState> {

  state: HomeState = {
  };

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res: { json: () => any; }) => res.json())
  //     .then((data: { message: React.SetStateAction<null>; }) => setData(data.message));
  // }, []);


  render() {
    // const gameContextValue: IGameContextProps = {
    //   isInRoom: this.state.isInRoom,
    //   setInRoom: () => { }
    // }
    return (
      // <GameContext.Provider value={gameContextValue}>
      <Container className="p-3">
        <JoinGameForm />
        {/* <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Container>
      <h2>Buttons</h2>
      <p>{!data ? "Loading..." : data}</p>
      <Button variant="primary" onClick={() => {SocketUtils.getInstance().send()}}>Primary</Button>{' '}
      <h2>Toasts</h2>
      <ToastsShowcase /> */}
      </Container>
      // </GameContext.Provider>
    );
  }
}

export default Home;

