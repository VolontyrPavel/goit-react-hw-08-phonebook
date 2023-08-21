import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { getLogin } from 'redux/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="pass"
          required
          onChange={handleChange}
          value={pass}
        />
      </label>
      <button type="submit">Сonfirm</button>
    </form>
  );
};

export default Login;
