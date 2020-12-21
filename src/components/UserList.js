import React from 'react';

import userList from '../data/userList.json'
import Welcome from "./Welcome";

class UserList extends React.Component{
  render() {
    return userList.map(user => <Welcome key={user.id} name={user.name} />)
  }
}

export default UserList;