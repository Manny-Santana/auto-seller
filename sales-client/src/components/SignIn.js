import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="signIn-container">
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.props.handleChange}
            value={this.props.username}
            placeholder="Username"
          />
          <input
            type="text"
            id="password"
            name="password"
            onChange={this.props.handleChange}
            value={this.props.password}
            placeholder="Password"
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
