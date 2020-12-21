import React from 'react';
import Welcome from "./components/Welcome";

class App extends React.Component {
  render() {
    return (
      <>
        <Welcome name="Mars" />
        <Welcome />
      </>
    )
  }
}

export default App