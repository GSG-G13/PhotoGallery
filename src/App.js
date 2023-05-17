import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';

export default class App extends Component {
  constructor() {
    super();
    this.state = { inputValue: 'red flower' };
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Header />
            <Images type="all" query="yellow flowers" />
          </header>
        </div>
      </>
    );
  }
}
