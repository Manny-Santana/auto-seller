import React, { Component } from "react";
import ListingItem from "./ListingItem";
//this will map the listings prop and pass it to a ListingItem component  that will format the listing.

class ShowListings extends Component {
  render() {
    return (
      <div>
        <h1>Listings</h1>
        <p>username</p>
        <p>title</p>
        <p>vehicle info...</p>
        <ListingItem />
      </div>
    );
  }
}

export default ShowListings;
