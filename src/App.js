import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Images from './components/Images';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: 'red flower',
      type: "all"
    };
    
  }
  setData =(newQuery)=>{
    this.setState({query:newQuery })
}

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Header  type={this.state.type} query={this.state.query} setData={this.setData}/>
            <Images type={this.state.type} query={this.state.query} />
          </header>
        </div>
      </>
    );
  }
}
