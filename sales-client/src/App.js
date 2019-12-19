import React from "react";
import "./App.css";
import axios from "axios";
import Visitor from "./components/Visitor";
import LoggedIn from "./components/LoggedIn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      listings: [],
      listingsLoaded: false,
      currentUser: false,
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAuth = this.handleSubmitAuth.bind(this);
  }

  async getListings() {
    const res = await axios("http://localhost:3000/listing");
    const data = res.data;
    this.setState({
      listings: data,
      listingsLoaded: true
    });
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  async handleSubmitAuth(event) {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/user/authenticate",
      { username: this.state.username, password: this.state.password }
    );
    const data = response.data;
    if (data.loggedIn) {
      this.setState({
        currentUser: data.user,
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }
  }

  componentDidMount() {
    this.getListings();
  }

  render() {
    const checkLogin = this.state.currentUser
      ? <LoggedIn
          listings={this.state.listings}
          currentUser={this.state.currentUser}
          loggedIn={this.state.loggedIn}
        />
      : <Visitor
          listings={this.state.listings}
          handleSubmit={this.handleSubmitAuth}
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
        />;

    return (
      <div className="App">
        {checkLogin}
      </div>
    );
  }
}

export default App;
