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
            <button className="top-tab-button">
                About
            </button>
          </header>
          <div className="content">
            <p>
              Hey there! This is an awesome view.
            </p>
          </div>
          <div className="content-spacer"></div>
          <div class="content">
            <h1>About</h1>
            <h2>About site</h2>
            <p>This site demonstrates several interactive Javascript games.</p>
            <h2>About creator</h2>
            <p>Michael Sartin-Tarm is from Wisconsin and enjoys music, games, and beer.</p>
          </div>
        </div>
        <Route path="/" component={IndexView} />
      </Router>
    );
  }
}

export default App;
