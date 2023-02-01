import React from "react";
import { UserCard } from "./UserCard";

export const UserList = ({ users, title }: any) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {users.map(({ user }: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
