import React, { memo, useEffect } from "react";
import "./login.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    if (formData.username === "john32" && formData.password === "87654321") {
      toast.success("Welcome to Admin");
      localStorage.setItem("token", "token");
      navigate("/admin");
    } else {
      toast.error("Wrong username or password");
    }
    setFormData(initialState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="login">
      <div className="container login">
        <form onSubmit={handleLogIn} className="login__box">
          <h2 className="login__title">Login</h2>
          <input
            value={formData.username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="login__btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Login);
