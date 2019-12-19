import React, { Component } from "react";
import ShowListings from "./ShowListings";
import Header from "./Header";
import CreateListing from "./CreateListing";

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNew: false
    };
    this.toggleCreate = this.toggleCreate.bind(this);
  }

  toggleCreate() {
    if (!this.props.loggedIn) {
      this.setState({
        createNew: !this.state.createNew
      });
    } else {
      alert(
        "You must be logged in to create a listing. \n Please log in to proceed.."
      );
    }
  }

  render() {
    const createFormToggle = this.state.createNew
      ? <CreateListing currentUser={this.props.currentUser} />
      : <ShowListings />;
    return (
      <div>
        <Header
          loggedIn={this.props.loggedIn}
          toggleCreate={this.toggleCreate}
        />
        <h1>User is Logged in</h1>

        {createFormToggle}
      </div>
    );
  }
}

export default LoggedIn;
