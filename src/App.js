import './App.css';

import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Atlas from "./components/Image";
import Info from "./components/Video";

class App extends Component {
  // // Prevent page reload, clear input, set URL and push history on submit
  // handleSubmit = (e, history, searchInput) => {
  //   e.preventDefault();
  //   e.currentTarget.reset();
  //   let url = `/search/${searchInput}`;
  //   history.push(url);
  // };


  videosMap = {
    'ripple_random': 'videos/ripple-random2.mp4'
  }

  imagesMaps = {
    'reglow_wiggle': 'videos/reglow_wiggle_5.mp4'
  }
  
  render() {
    return (
        <HashRouter basename="/AtlasKolapsu">
          <div className="container">
            <Route
              render={props => (
                <Header/>
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/atlas" />}
              />
              <Route path="/atlas" render={() => <Atlas/>} />
              <Route path="/info" render={() => <Info/>} />
            </Switch>
          </div>
        </HashRouter>
    );
  }
}

export default App;
