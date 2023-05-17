import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
// import imageSearch from './utils/fetcher.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = { inputValue: "red flower" };
  }

  render() {
    return (
      <>
        <div className="App">
          {/* <header className="App-header">
            {imageSearch('yellow flowers', 'photo')}
          </header> */}
          <Header />
        </div>
      </>
    )
  }
}

