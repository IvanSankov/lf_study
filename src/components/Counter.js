import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showInfo: true
    }
  }

  handlerClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        showInfo: false
      }
    });
  }

  reset() {
    this.setState({
      counter: 0,
      showInfo: true
    });
  }

  resetCounter() {
    this.setState({
      counter: 0,
    });
  }

  toggleShowInfo() {
    this.setState(prevState => {
      return {
        showInfo: !prevState.showInfo
      }
    })
  }

  render() {
    const { counter, showInfo } = this.state;

    return (
      <div>
        <Increase onClick={() => this.handlerClick()} counter={counter} />
        <ShowInfo showInfo={showInfo} onClick={() => this.toggleShowInfo()} />
        <Button title="Reset" onClick={() => this.reset()} />
        <Button title="Reset counter" onClick={() => this.resetCounter()} />
      </div>
    )
  }
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