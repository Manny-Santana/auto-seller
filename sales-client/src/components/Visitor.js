//Visitor view if not logged in..
//can still see listings...
//cannot make new listing
//can choose to sign in or sign up.
//state is only returning listing

import React, { Component } from "react";
import ShowListings from "./ShowListings";
import Header from "./Header";

class Visitor extends Component {
  render() {
    return (
      <div>
        <Header
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          username={this.props.username}
          password={this.props.password}
        />
        <h1>Visitor page</h1>
        <ShowListings listings={this.props.listings} />
      </div>
    );
  }
}

export default Visitor;
