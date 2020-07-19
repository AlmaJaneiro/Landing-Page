import React, { Component, Fragment } from 'react';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import SeccionHome from "./components/SeccionHome.js"
import "./components/css/estilos.css"

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <SeccionHome/>
          <Footer/>
      </Fragment>
    );
  }
}

export default App;