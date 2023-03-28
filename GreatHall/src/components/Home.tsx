import React from 'react';
import '../assets/styles/App.css';

function Home() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res: { json: () => any; }) => res.json())
      .then((data: { message: React.SetStateAction<null>; }) => setData(data.message));
  }, []);

  return (
    <p>{!data ? "Loading..." : data}</p>
  );
}

export default Home;

