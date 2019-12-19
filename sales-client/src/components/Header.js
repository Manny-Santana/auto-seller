import React, { Component } from "react";
import "../App.css";
class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="overlay">
          <h1 className="title">Welcome to Auto Seller</h1>
        </div>
      </div>
    );
  }
}

export default Header;
