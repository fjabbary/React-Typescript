import { useState } from "react";

const UserList = () => {
  type User = {
    id: number;
    name: string;
    age: number;
  };

  const [users, _] = useState<User[]>([
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 40 },
    { id: 5, name: "Eve", age: 30 },
  ]);

  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <p>
            <b>Name: </b>
            {user.name} - <b>Age:</b> {user.age}
          </p>
        </div>
      ))}
    </div>
  );
};
export default UserList;
