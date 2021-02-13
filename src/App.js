import React from 'react';
import TarkovCard from "./components/TarkovCard";
import ApexCard from "./components/ApexCard";
import TarkovCard2 from "./components/TarkovCard2";
import TarkovCard2Class from "./components/TarkovCard2Class";


class App extends React.Component {
  render() {
    return (
      <>
        <TarkovCard2 title={'Tarkov game'} description={'qwe qwe qwe qweqwe qwe'} />
        <p>-------------------------------------</p>
        <TarkovCard2Class title={'Tarkov game'} description={'qwe qwe qwe qweqwe qwe'} />
      </>
    )
  }
}

export default App