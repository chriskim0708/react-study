import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Toggle from "./components/Toggle";

function App() {
  const [visible, setVisible] = useState(true);
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
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onClick = () => {
    const user = {
      id: users.length + 1,
      username,
      email,
      active: false
    };
    setUsers(users.concat(user));
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    const toggleUser = users.map((user) => ({
      ...user,
      active: user.id === id ? !user.active : false
    }));
    setUsers(toggleUser);
  };
  const onVisible = () => {
    setVisible(!visible);
  };
  return (
    <div id="app">
      <Toggle visible={visible} />
      <button onClick={onVisible}>toggle</button>
      {/* <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onClick={onClick}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> */}
    </div>
  );
}

export default App;
