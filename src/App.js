import React from 'react';
import Header from "./components/contextExample/Header";
import Footer from "./components/contextExample/Footer";
import Content from "./components/contextExample/Content";
import UserProvider from "./components/contextExample/UserProvider";
import Form1 from "./components/FormExample/Form1";
import Form2 from "./components/FormExample/Form2";
import ReactHookForm from "./components/FormExample/ReactHookForm";
import UserForm from "./components/FormExample/UserForm";

class App extends React.Component {
  render() {
    return (
      <>
        <UserProvider>
          <Header/>

          <UserForm />

          <Footer/>
        </UserProvider>
      </>
    )
  }
}

export default App