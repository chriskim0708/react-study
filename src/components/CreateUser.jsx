import React from "react";

function CreateUser({ username, email, onChange, onClick }) {
  console.log("create user");
  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onClick}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
