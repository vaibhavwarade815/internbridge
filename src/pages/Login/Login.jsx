import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <section className="page-login">
      <h2>Login</h2>
      <form>
        <label>Email<input type="email" /></label>
        <label>Password<input type="password" /></label>
        <button type="submit">Sign in</button>
      </form>
    </section>
  )
}
