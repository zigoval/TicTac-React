import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import Headers from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <Table />
      </div>
    );
  }
}

export default App;
