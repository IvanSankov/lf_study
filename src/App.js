import React from 'react';
import Welcome from "./components/Welcome";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

class App extends React.Component {
  render() {
    return (
      <>
        <Modal />
        <Welcome name="Mars" />
        <Welcome />
        <UserList />
      </>
    )
  }
}

export default App