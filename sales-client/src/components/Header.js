import React, { Component } from "react";
import "../App.css";
import SignIn from "./SignIn";
class Header extends Component {
  render() {
    const showSignUpOrLogin = this.props.loggedIn
      ? <button>Log Out</button>
      : <SignIn
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          username={this.props.username}
          password={this.props.password}
        />;
    return (
      <div className="header-container">
        <div className="overlay">
          <h1 className="title">Welcome to Auto Seller</h1>
          <button onClick={this.props.toggleCreate}> Create New + </button>
          {showSignUpOrLogin}
        </div>
      </div>
    );
  }
}

export default Header;
