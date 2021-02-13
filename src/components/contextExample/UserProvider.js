import React from 'react';

import Client from "../../http/Client";
import UserContext from "./UserContext";

export default class UserProvider extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const client = new Client();

    client.getUserById('recaNxinS8SO2aMQD')
      .then(data => {
        const user = {
          id: data.id,
          name: data.fields.name,
          status: data.fields.status,
          discordNickname: data.fields.discordNickname
        }

        this.setState({
          user
        })
      })
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}