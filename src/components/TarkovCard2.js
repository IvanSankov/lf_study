import React, {useState, useEffect} from 'react';

import Client from "../http/Client";

export default function TarkovCard2({title, description}) {
  const [color, setColor] = useState('red');
  const [hide, setHide] = useState(false);
  const [tarkovInfo, setTarkovInfo] = useState({
    isLoading: true,
    error: null,
    data: null,
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const client = new Client();

    client.getTarkovOffer()
      .then(data => setTarkovInfo({
        isLoading: false,
        error: null,
        data: data
      }))
      .catch(reason => setTarkovInfo({
        isLoading: false,
        error: reason.message,
        data: null
      }))
  }, [])

  useEffect(() => {
    console.log(`**************************`);
    console.log(`Hook Tarkov Card2 ${color}`);
    console.log(`**************************`);
  }, [color, hide]);

  useEffect(() => {
    console.log(`--------------------------`);
    console.log(`Hook Tarkov Card2 HIDE ${hide}`);
    console.log(`--------------------------`);
  }, [hide]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleColor = () => {
    setColor(prevState => {
      if (prevState === 'red') {
        return 'green';
      }

      return 'red';
    });
  }

  const toggleHideHandler = () => setHide(prevState => !prevState);

  if (tarkovInfo.error) {
    return <h1>ERROR!!!!</h1>
  }

  if (tarkovInfo.isLoading) {
    return <h1>LOADING!</h1>
  }

  if (hide) {
    return <button onClick={toggleHideHandler}>Show</button>
  }

  return (
    <>
      <h1>Window width: {width}</h1>
      <button onClick={toggleHideHandler}>Hide</button>
      <button onClick={toggleColor}>Toggle color</button>
      <div style={{color: color}}>
        <h3>Title: {tarkovInfo.data.fields.title}</h3>
        <p>Description: {tarkovInfo.data.fields.description}</p>
      </div>
    </>
  );
}
