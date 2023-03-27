import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res: { json: () => any; }) => res.json())
      .then((data: { message: React.SetStateAction<null>; }) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// function setData(_message: any): any {
//   throw new Error('Function not implemented.');
// }

