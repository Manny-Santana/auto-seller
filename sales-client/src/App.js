import React from "react";
import "./App.css";
import axios from "axios";
import Visitor from "./components/Visitor";
import LoggedIn from "./components/LoggedIn";

import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      listingsLoaded: false,
      currentUser: false
    };
  }

  async getListings() {
    const res = await axios("/listing");
    const data = res.data;
    this.setState({
      listings: data,
      listingsLoaded: true
    });
  }

  handleSubmit(event) {}

  componentDidMount() {
    this.getListings();
  }

  render() {
    const checkLogin = this.state.currentUser
      ? <LoggedIn
          listings={this.state.listings}
          currentUser={this.state.currentUser}
        />
      : <Visitor listings={this.state.listings} />;

    return (
      <div className="App">
        <Header />
        {checkLogin}
      </div>
    );
  }
}

export default App;
