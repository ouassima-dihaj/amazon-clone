import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { auth } from "./firebase";
import {useNavigate} from "react-router-dom";
function Login() {
const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const auth = getAuth(); // Obtain the auth object

  const signIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth,email, password)
      .then(userCredential => {
        // Successfully signed in
        navigate('/');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    // Use createUserWithEmailAndPassword from the auth object
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully registered
        const user = userCredential.user;
        console.log(user);
        if(userCredential){
            navigate('/');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
