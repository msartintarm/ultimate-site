import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import IndexView from './index_view.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <button className="top-tab-button">
                Game1
            </button>
            <button className="top-tab-button">
                Game2
            </button>
            <p>
              Hey there! This is an awesome view.
            </p>
          </header>
        </div>
        <Route path="/" component={IndexView} />
      </Router>
    );
  }
}

export default App;
