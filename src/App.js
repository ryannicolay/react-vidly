import React, { Component } from "react";
import "./App.css";
import Movies from "./componets/movies";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
