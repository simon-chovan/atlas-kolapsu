import './App.css';

import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Atlas from "./components/Atlas";
import Info from "./components/Info";
import NotFound from "./components/NotFound";

class App extends Component {
  // // Prevent page reload, clear input, set URL and push history on submit
  // handleSubmit = (e, history, searchInput) => {
  //   e.preventDefault();
  //   e.currentTarget.reset();
  //   let url = `/search/${searchInput}`;
  //   history.push(url);
  // };

  constructor(props) {
    super(props);
    this.state = { backgroundColor: "white", textColor: "red" };
  }

  videosMap = {
    'ripple_random': 'videos/ripple-random2.mp4'
  }

  imagesMaps = {
    'reglow_wiggle': 'videos/reglow_wiggle_5.mp4'
  }

  changeColor = (backgroundColor, textColor) => {
    document.body.style.backgroundColor = backgroundColor;
    this.setState({ backgroundColor: backgroundColor, textColor: textColor });
  };

  render() {
    return (
      <div style={{ background: this.state.backgroundColor, color: this.state.textColor }} id="main">
        {/* <HashRouter basename="/atlas-kolapsu"> */}
        <HashRouter>
          <div className="container">
            <Route
              render={props => (
                <Header appChangeColor={this.changeColor} />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/atlas" />}
              />
              <Route path="/atlas" render={props => <Atlas />} />
              <Route path="/info" render={props => <Info />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
