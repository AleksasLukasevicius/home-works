import React, { useState } from "react";

export const UserCard = ({ user }: any) => {
  const [isIdShown, setIsIdShown] = useState(false);

  const visibilityHandler = () => {
    setIsIdShown((prevIsIdShown) => !prevIsIdShown);
  };

  return (
    <div className="user-card-content" onClick={visibilityHandler}>
      {isIdShown ? (
        <div className="user-card-id">{user.id}</div>
      ) : (
        <div className="user-card">
          <p>Login: {user.login}</p>
          <p>
            {/* URL: <a href={user.url}>user url</a> */}

            <a href={user.url} target="_blank" rel="noreferrer">
              user url
            </a>
            {/* <a href={user.url} target="_blank">Visit W3Schools!</a> */}
          </p>
          <p>Type: {user.type}</p>
        </div>
      )}
    </div>
  );
};
