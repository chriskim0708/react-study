import React, { useContext } from "react";
import { UserDispatch } from "../App";

const User = React.memo(function User({ user }) {
  const active = user.active ? "active" : "";
  const { dispatch } = useContext(UserDispatch);

  return (
    <li className={active}>
      <span onClick={() => dispatch({ type: "SELECT_USER", id: user.id })}>
        <b>{user.username}</b>
        &nbsp;
        <span>{user.email}</span>&nbsp;
      </span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </li>
  );
});

function UserList({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(UserList);
