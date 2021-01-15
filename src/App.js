import React from 'react';
import Counter from "./components/Counter";
import WelcomeModal from "./components/WelcomeModal";

class App extends React.Component {
  render() {
    return (
      <>
        <WelcomeModal />
        <Counter />
      </>
    )
  }
}

export default App