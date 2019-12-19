import React, { Component } from "react";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      vehicle_make: "",
      vehicle_model: "",
      vehicle_year: 0,
      vehicle_color: "",
      vehicle_condition: "",
      description: "",
      img_url: ""
    };
  }

  render() {
    return (
    <div className='createForm'>
        <form>
            
        </form>
    </div>
    )
  }
}

export default CreateListing;
