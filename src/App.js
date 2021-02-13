import React from 'react';
import Header from "./components/contextExample/Header";
import Footer from "./components/contextExample/Footer";
import Content from "./components/contextExample/Content";
import UserProvider from "./components/contextExample/UserProvider";

class App extends React.Component {
  render() {
    return (
      <>
        <UserProvider>
          <Header/>

          <Content/>

          <Footer/>
        </UserProvider>
      </>
    )
  }
}

export default App