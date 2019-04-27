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
            <button className="top-tab-button">Game1</button>
            <button className="top-tab-button">Game2</button>
            <button className="top-tab-button">About</button>
          </header>
          <Game1Content/>
          <div className="content-spacer"></div>
          <Game2Content/>
          <div className="content-spacer"></div>
          <AboutContent/>
        </div>
        <Route path="/" component={IndexView} />
      </Router>
    );
  }
}

class Game1Content extends Component {
  render() {
    return (
      <div className="content">
        <h1>Game 1</h1>
        <p>
          Hey there! This is an awesome view.
        </p>
      </div>
    );
  }
}

class Game2Content extends Component {
  render() {
    return (
      <div class="content">
        <h1>Game 2</h1>
        <p>
          Hey there! This is an awesome view.
        </p>
      </div>
    );
  }
}

class AboutContent extends Component {
  render() {
    return (
      <div class="content">
        <h1>About</h1>
        <h2>About site</h2>
        <p>This site demonstrates several interactive Javascript games.</p>
        <h2>About creator</h2>
        <p>Michael Sartin-Tarm is from Wisconsin and enjoys music, games, and beer.</p>
      </div>
    );
  }
}

export default App;
