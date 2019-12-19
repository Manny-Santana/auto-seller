//Visitor view if not logged in..
//can still see listings...
//cannot make new listing
//can choose to sign in or sign up.
//state is only returning listing

import React, { Component } from "react";
import ShowListings from "./ShowListings";

class Visitor extends Component {
  render() {
    return (
      <div>
        <h1>Visitor page</h1>
        <ShowListings listings={this.props.listings} />
      </div>
    );
  }
}

export default Visitor;
