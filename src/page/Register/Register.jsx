import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { getRegister } from 'redux/operations';

import css from './Register.module.css'

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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
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

export default Register;

{/* <form onSubmit={handleSubmit}>
    <h2 class="fs-title">Create your account</h2>
    <input type="name" name="name" placeholder="Name"  onChange={handleChange}
          value={name} />
    <input type="email" name="email" placeholder="Email" onChange={handleChange}
          value={email}/>
    <input type="password" name="pass" placeholder="Password" onChange={handleChange}
          value={pass}/>
    <button type="submit" name="next" class="next action-button" value="Next" />Сonfirm</button>
  </form> */}
