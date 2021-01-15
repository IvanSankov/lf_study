import React, {useState} from 'react';

export default function Counter2() {
  const [counter, setCounter] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [multiple, setMultiple] = useState({
    firstName: 'Ivan',
    secondName: 'Ivanov',
  });

  const updater = (prevState) => {
    let newState = prevState + 1

    return newState
  }

  const increase = () => {
    setCounter(updater);
    setShowInfo(false);
  }

  const successUpdateMultiple = () => {
    setMultiple(prevMultiple => {
      return {...prevMultiple, firstName: 'Petr'}
    })
  }

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>

      { showInfo && <p>Info about bla bla bla</p> }
      <button onClick={() => setShowInfo(prevShowInfo => !prevShowInfo)}>Toggle info</button>

      <h1>Hello {multiple.firstName} {multiple.secondName}</h1>
      <button onClick={() => setMultiple({firstName: 'Petr'})}>Fail update multiple state</button>
      <button onClick={() => setMultiple(1)}>Fail 2 update multiple state</button>
      <button onClick={successUpdateMultiple}>Success update multiple state</button>
    </>
  );
}

function Increase({ onClick, counter }) {
  return (
    <>
      <p>Counter: { counter }</p>
      <Button onClick={onClick} title={"Increase"} />
    </>
  );
}

function ShowInfo({ showInfo, onClick }) {
  return (
    <>
      { showInfo && <p>Info about bla bla bla</p> }
      <button onClick={onClick}>
        { showInfo ? 'Hide info' : 'Show Info' }
      </button>
    </>
  );
}

function Button({ onClick, title }) {
  return (
    <button onClick={onClick}>{ title }</button>
  );
}