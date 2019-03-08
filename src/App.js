import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import { Button } from 'evergreen-ui';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Button>
          Yay Evergreen
        </Button>
        </header>
      </div>
    );
  }
}

export default App;
