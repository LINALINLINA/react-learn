import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './container/todos';
import Filter from './container/filter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Todo />
         <Filter />
        </header>
      </div>
    );
  }
}

export default App;
