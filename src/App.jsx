import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
  useRef
} from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import useInputs from "./hooks/useInputs";
// import Counter from "./components/Counter";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ]
};

function reducer(state, action) {
  const { users } = state;

  switch (action.type) {
    case "CREATE_USER": {
      return {
        ...state,
        users: [...users].concat({
          id: users.length + 1,
          username: action.username,
          email: action.email,
          active: false
        })
      };
    }
    case "REMOVE_USER": {
      return {
        ...state,
        users: [...users].filter((user) => user.id !== action.id)
      };
    }
    case "SELECT_USER": {
      return {
        ...state,
        users: users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    }
    default: {
      return state;
    }
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: ""
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const onClick = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      username,
      email
    });
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]); // 3
  const onReducer = () => {
    dispatch();
  };
  return (
    <UserDispatch.Provider value={{ dispatch }}>
      <div id="app">
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onClick={onClick}
        />
        <UserList users={users} />
        <button onClick={onReducer}>reducer</button>
        {/* <Counter /> */}
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
