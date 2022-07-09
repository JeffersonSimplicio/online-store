import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const test = [
    { userName: 'nome1', userEmail: 'email1', userPassword: 'senha1' },
    { userName: 'nome2', userEmail: 'email2', userPassword: 'senha2' },
    { userName: 'nome3', userEmail: 'email3', userPassword: 'senha3' },
    { userName: 'nome4', userEmail: 'email4', userPassword: 'senha4' },
  ]; // Testes durante a produção
  const login = () => {
    const emailTest = 'email6'; // Testes durante a produção
    const senhaTest = 'senha1'; // Testes durante a produção
    const userData = test.find(({ userEmail }) => userEmail === emailTest);
    if (userData) {
      if (userData.userPassword === senhaTest) {
        console.log('Senha tá certa'); // Testes durante a produção
      } else {
        global.alert('A senha está incorreta');
      }
    }
    if (!userData && global.confirm('Usuario não encontrado. Deseja cria uma conta?')) {
      navigate('/registration');
    }
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
