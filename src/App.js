import React from 'react';
import Welcome from "./components/Welcome";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header title="New Header" main />
        <Modal />
        <Welcome name="Mars" lastName="Earth" age={39} orders={['#123', '#qwe', '#zz3']} />
        <Welcome />
        <UserList />
      </>
    )
  }
}

export default App