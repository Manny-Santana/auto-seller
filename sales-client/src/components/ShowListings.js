import React, { Component } from "react";
import ListingItem from "./ListingItem";
//this will map the listings prop and pass it to a ListingItem component  that will format the listing.

class ShowListings extends Component {
  render() {
    const listings = this.props.listings.map(listing => {
      return <ListingItem key={listing._id} listing={listing} />;
    });
    return (
      <div className="listings-section">
        {listings}
      </div>
    );
  }
}

export default ShowListings;
