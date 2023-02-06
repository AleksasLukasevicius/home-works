import React, { useState } from "react";

export const UserCard = ({ user }: any) => {
  const [isIdShown, setIsIdShown] = useState(false);

  const visibilityHandler = () => {
    setIsIdShown((prevIsIdShown) => !prevIsIdShown);
  };

  return (
    <div className="user-card" onClick={visibilityHandler}>
      {isIdShown ? (
        <p>{user.id}</p>
      ) : (
        <div>
          <p>Login: {user.login}</p>
          <p>
            URL: <a href={user.url}>user</a>
          </p>
          <p>Type: {user.type}</p>
        </div>
      )}
    </div>
  );
};
