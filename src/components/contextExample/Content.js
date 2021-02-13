
import React from 'react';
import UserContext from "./UserContext";

export default class Content extends React.PureComponent{
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {
            user => <UserDiscord user={user} />
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

function UserDiscord({user}) {
  if (!user) {
    return 'None'
  }

  return (
    <div style={{background: 'black', color: 'white'}}>User DiscordNickname: {user.discordNickname}</div>
  );
}