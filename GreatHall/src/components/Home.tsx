import React from 'react';
import '../assets/styles/App.css';
import Container from 'react-bootstrap/Container';
import ToastsShowcase from './ToastsShowcase';
import Button from 'react-bootstrap/Button';
import { SocketUtils } from './communication/SocketUtils';

function Home() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res: { json: () => any; }) => res.json())
      .then((data: { message: React.SetStateAction<null>; }) => setData(data.message));
  }, []);

  return (

    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Container>
      <h2>Buttons</h2>
      <p>{!data ? "Loading..." : data}</p>
      <Button variant="primary" onClick={() => {SocketUtils.getInstance().send()}}>Primary</Button>{' '}
      <h2>Toasts</h2>
      <ToastsShowcase />
    </Container>
  );
}

export default Home;

