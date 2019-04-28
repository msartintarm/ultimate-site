import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
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

  topTabButtonClass(section) {
    return "top-tab-button" + (this.state.section == section? " button-active" : "");
  }

  sectionClass(section) {
  return "section" + (this.state.section != section? " section-hide" : "");
}


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <button onClick={() => this.showGame1Content()}
                className={this.topTabButtonClass(Sections.GAME1)}>
              Game1
            </button>
            <button onClick={() => this.showGame2Content()}
                className={this.topTabButtonClass(Sections.GAME2)}>
              Game2
            </button>
            <button onClick={() => this.showAboutContent()}
                className={this.topTabButtonClass(Sections.ABOUT)}>
              About
            </button>
          </header>
          <div className={this.sectionClass(Sections.GAME1)}>
            <Game1Content />
          </div>
          <div className="content-spacer"></div>
          <div className={this.sectionClass(Sections.GAME2)}>
            <Game2Content />
          </div>
          <div className="content-spacer"></div>
          <div className={this.sectionClass(Sections.ABOUT)}>
            <AboutContent />
          </div>
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
      <div className="content">
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
      <div className="content">
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
