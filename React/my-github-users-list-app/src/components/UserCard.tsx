import React, { useState } from "react";

export const UserCard = (props: any) => {
  const [isIdShown, setIsIdShown] = useState(true);

  return (
    <div className="user-card">
      <div className="user-card-content">
        <p>Login: {props.user.login}</p>
        <p>URL: {props.user.url}</p>
        <p>Type: {props.user.type}</p>

        <input
          checked={isIdShown}
          type="checkbox"
          name="showId"
          onChange={(event) => setIsIdShown(event.target.checked)}
        />
      </div>
    </div>
  );
};
