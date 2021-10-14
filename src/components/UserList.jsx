import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  console.log("user component render");

  useEffect(() => {
    // 마운트
    console.log("컴포넌트 마운트");
    return () => {
      // 언마운트
      console.log("컴포넌트 언마운트");
    };
  }, [user]); // deps
  const active = user.active ? "active" : "";
  return (
    <li className={active}>
      <span onClick={() => onToggle(user.id)}>
        <b>{user.username}</b>&nbsp;
        <span>{user.email}</span>&nbsp;
      </span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </li>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
