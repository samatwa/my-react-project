import { useState } from "react";
import "./App.css";

const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleLoginChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleLoginChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;