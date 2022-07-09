import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = () => {
  };
  return (
    <>
      <form>
        <label htmlFor="user-email">
          Email:
          <input
            type="email"
            name="user-email"
            id="user-email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="user-password">
          Senha:
          <input
            type="password"
            name="user-password"
            id="user-password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => login()}
        >
          Login
        </button>
      </form>
      <Link to="/registration"><p>Criar conta</p></Link>
    </>
  );
}

export default Login;
