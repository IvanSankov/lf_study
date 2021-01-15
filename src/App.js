import React from 'react';
import Counter from "./components/Counter";
import WelcomeModal from "./components/WelcomeModal";
import Counter2 from "./components/Counter2";

class App extends React.Component {
  render() {
    return (
      <>
        <WelcomeModal />
        <Counter2 />
      </>
    )
  }
}

export default App