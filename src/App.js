import React, { Component } from 'react';
import './App.css';
import Button from "react-bootstrap/lib/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h3 className="cal-title">
      Welcome to Calkky
        </h3>
            <Button bsStyle="success">Hello World</Button>
      </div>
    );
  }
}

export default App;
