import React, { useState, useRef } from "react";

function InputSample() {
  const [formValue, setFormValue] = useState({
    email: "",
    id: ""
  });
  const nextNumber = useRef(4);
  const emailInput = useRef();

  const { email, id } = formValue;

  const onChange = (e) => {
    nextNumber.current++;
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const onReset = () => {
    setFormValue({
      email: "",
      id: ""
    });
    emailInput.current.focus();
  };

  console.log("nextNumber", nextNumber.current);

  return (
    <div>
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일"
        ref={emailInput}
      />
      <br />
      <input name="id" onChange={onChange} value={id} placeholder="아이디" />
      <br />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>이메일: {email}</b>
        <br />
        <b>아이디: {id}</b>
      </div>
    </div>
  );
}

export default InputSample;
