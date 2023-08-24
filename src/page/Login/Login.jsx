import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { getLogin } from 'redux/operations';

import css from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'pass':
        setPass(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: email,
      password: pass,
    };
    dispatch(getLogin(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPass('');
  };

  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css.title}>log into your account</h2>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <input
          className={css.input}
          type="password"
          name="pass"
          placeholder="Password"
          onChange={handleChange}
          value={pass}
        />
        <button type="submit" name="next" className={css.button} >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
