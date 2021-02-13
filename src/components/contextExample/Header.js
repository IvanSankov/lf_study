import React from 'react';

import UserContext from "./UserContext";

export default function Header() {
  return (
    <div id="header">
      <div id="logo">
        LF
      </div>
      <div id="userHeader">
        <UserContext.Consumer>
          {
            (user) => {
              return (
                <p style={{color: 'red'}}>{!user ? 'GUEST' : `Hi, ${user.name}`}</p>
              );
            }
          }
        </UserContext.Consumer>
      </div>
    </div>
  );
}