import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import IndexView from './index_view.component';
import './App.css';

const Sections = Object.freeze({
    GAME1:   Symbol("game1"),
    GAME2:  Symbol("game2"),
    ABOUT: Symbol("about")
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {section: Sections.ABOUT};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <button onClick={this.showGame1Content}
                className={"top-tab-button" + (this.state.section == Sections.GAME1)? "-active" : ""}>
              Game1
            </button>
            <button onClick={this.showGame2Content}
                className={"top-tab-button" + (this.state.section == Sections.GAME2)? "-active" : ""}>
              Game2
            </button>
            <button onClick={this.showAboutContent}
                className={"top-tab-button" + (this.state.section == Sections.ABOUT)? "-active" : ""}>
              About
            </button>
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

  showGame1Content() {
    this.setState({section: Sections.GAME1});
  }

  showGame2Content() {
    this.setState({section: Sections.GAME2});
  }

  showAboutContent() {
    this.setState({section: Sections.ABOUT});
  }

}

this.setState({
  counter: this.state.counter + this.props.increment,
});

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
