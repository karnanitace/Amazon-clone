import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    // Login Logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in , redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    // Register Logic

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login_signIn">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_registerBtn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
