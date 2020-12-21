import React from 'react';
import Welcome from "./components/Welcome";
import UserList from "./components/UserList";

class App extends React.Component {
  render() {
    return (
      <>
        <Welcome name="Mars" />
        <Welcome />
        <UserList />
      </>
    )
  }
}

export default App