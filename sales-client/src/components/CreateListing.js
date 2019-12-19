import React, { Component } from "react";
import axios from "axios";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.currentUser._id,
      title: "",
      vehicle_make: "",
      vehicle_model: "",
      vehicle_year: 0,
      vehicle_color: "",
      vehicle_condition: "",
      description: "",
      img_url: ""
    };

    this.handleListingSubmit = this.handleListingSubmit.bind(this);
  }

  async handleListingSubmit(event) {
    event.preventDefault();
    const newListing = this.state;
    const response = await axios.post("http://localhost:3000/listing", {
      newListing
    });
    const data = response.data;
    console.log(data);
  }

  render() {
    return (
      <div className="createForm">
        <form />
      </div>
    );
  }
}

export default CreateListing;
