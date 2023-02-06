import { UserCard } from "./UserCard";

export const UsersList = ({ users }: any) => {
  return (
    <div className="users-container">
      {users.map((user: any) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
