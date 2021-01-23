import React from 'react';
import Counter from "./components/Counter";
import WelcomeModal from "./components/WelcomeModal";
import Counter2 from "./components/Counter2";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <>
        <Form />
      </>
    )
  }
}

class Foo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increase() {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    });
  }

  render() {
    console.log('Foo render!');

    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={() => this.increase()}>Increase</button>
        <Bar data={{ id: 3 }} />
      </>
    );
  }
}

class Bar extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.data.id !== nextProps.data.id;
  }

  render() {
    console.log('Bar render!');

    return <div>{this.props.data.id}</div>
  }
}

export default App