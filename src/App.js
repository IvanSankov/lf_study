import React from 'react';
import TarkovCard from "./components/TarkovCard";
import ApexCard from "./components/ApexCard";


class App extends React.Component {
  render() {
    return (
      <>
        <TarkovCard />
        <ApexCard />
      </>
    )
  }
}

export default App