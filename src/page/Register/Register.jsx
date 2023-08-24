import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { getRegister } from 'redux/operations';

import css from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

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
      name: name,
      email: email,
      password: pass,
    };
    dispatch(getRegister(user));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPass('');
  };

  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css.title}>Create your account</h2>
        <input
          className={css.input}
          type="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
        />
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
        <button type="submit" name="next" className={css.button} value="Next">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
