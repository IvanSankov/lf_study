import React, {useContext} from 'react';

import UserContext from "./UserContext";

export default function Footer() {
  const user = useContext(UserContext);

  return (
    <div id="footer">
      <div id="links">
        <a href="#">Bla bla</a>
      </div>
      <div id="userFooter">
        {user ? `Status: ${user.status}`: '-'}
      </div>
    </div>
  );
}