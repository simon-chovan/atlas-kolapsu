import React, { Component } from "react";

import { NavLink } from 'react-router-dom';
import App from '../App.js'

class Header extends Component {
// const Header = () => {
  constructor(props) {
    super(props);
  };

  click = (backgroundColor, textColor) => {
      this.props.appChangeColor(backgroundColor, textColor);
  }

  render() {
    return (
      <nav className="main-header">
          <NavLink className="default-link" 
            to="/atlas" 
            onClick={() => this.click("white", "red")}>
              atlas kolapsu
          </NavLink>
          <NavLink className="default-link" 
            to="/info"
            onClick={() => this.click("red", "white")}>
              o projekte
          </NavLink>
      </nav>
    );
  }
}

export default Header;