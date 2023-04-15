interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export function UserList({ users }: { users: User[] }) {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    );
  }
  