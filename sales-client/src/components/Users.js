import React, { Component } from "react";

class Users extends Component {
  render() {
    const Users = this.props.users.map(user => {
      const { name, username, _id } = user;
      return (
        <div key={_id}>
          <p>
            {name}
          </p>
          <p>
            {username}
          </p>
        </div>
      );
    });
    return (
      <div>
        {Users}
      </div>
    );
  }
}

export default Users;
