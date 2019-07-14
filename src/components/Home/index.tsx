import React, { useEffect } from 'react';

interface Props {
  name: string
}

const Home = (props: Props) => {

  useEffect(() => {
    console.log('test');
  }, []);

  return <h1>{props.name}</h1>;
}

export default Home;
