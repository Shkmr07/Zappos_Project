
import { useState } from "react";
import "../style/login.css";
import ZapposLogo from "@/assets/ZapposLogo.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { isAuthentication } from "../store";


export default function Login() {

  const text = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleForm(event){
    event.preventDefault()
    dispatch(isAuthentication(text.current.value))
    navigate('/')
  }

  return (
    <div className="login-container">
      <img src='https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg' alt="Zappos Logo" className="logo" />
      <div className="login-form">
        <h1>Create account</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="name">Your name</label>
          <input ref={text} type="text" id="name" placeholder="Your full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email address" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <p className="info">Passwords must be at least 6 characters.</p>

          <label htmlFor="confirm-password">Re-enter password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm password"
          />

          <button type="submit">Create your Zappos account</button>
        </form>
        <p className="help">
          Need additional help? Don’t worry! You can reach us via phone, text,
          or live chat. See <a href="#">here</a> for contact details.
        </p>
        <p className="sign-in">
          Already have an account? <a href="#">Sign in ›</a>
        </p>
      </div>
      <footer className="login-footer">
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
        <a href="#">Customer Service</a>
        <p>© 2009–2023 Zappos.com LLC or its affiliates</p>
      </footer>
    </div>
  );
}
