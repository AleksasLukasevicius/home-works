import React, { useState } from "react";

export const UserCard = ({ user }: any) => {
  const [isIdShown, setIsIdShown] = useState(false);

  const visibilityHandler = () => {
    setIsIdShown((prevIsIdShown) => !prevIsIdShown);

    // if (!isIdShown) {
    //   return setIsIdShown(true);
    // }
    // setIsIdShown(false);
  };

  return (
    <div className="user-card-content" onClick={visibilityHandler}>
      {isIdShown ? (
        <div className="user-card-id">{user.id}</div>
      ) : (
        <div className="user-card">
          <p>Login: {user.login}</p>
          <p>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              user url
            </a>
          </p>
          <p>Type: {user.type}</p>
        </div>
      )}
    </div>
  );
};
