import React from "react";
import "./login.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } = useGetInputValue(initialState);

  const handleLogIn = e => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialState)
  }
  return (
    <form onSubmit={handleLogIn} >
      <h2>Login</h2>
      <input
        value={formData.username}
        onChange={handleChange}
        name="username"
        type="text"
      />
      <input
        value={formData.password}
        onChange={handleChange}
        name="password"
        type="password"
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
