import React, { useState, useEffect, useMemo, useCallback } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });

  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "yskim",
      email: "yskim@iparking.co.kr",
      active: true
    },
    {
      id: 2,
      username: "smlee3",
      email: "smlee3@iparking.co.kr",
      active: false
    },
    {
      id: 3,
      username: "wjheo",
      email: "wjheo@iparking.co.kr",
      active: false
    }
  ]);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  }, []); // useCallback(() => {})
  const onClick = useCallback(() => {
    setUsers((prevUsers) => {
      return prevUsers.concat({
        id: prevUsers.length + 1,
        username,
        email,
        active: false
      });
    });
  }, [username, email]);
  const onRemove = useCallback((id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      });
    });
  }, []);
  const count = useMemo(() => countActiveUsers(users), [users]); // 3
  return (
    <div id="app">
      {/* <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onClick={onClick}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> */}
      <Counter />
    </div>
  );
}

export default App;
