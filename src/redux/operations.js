import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);

export const getRegister = createAsyncThunk('auth/getRegister', async user => {
  const { data } = await axios.post('/users/signup', user);
  token.set(data.token);
  localStorage.setItem('token', JSON.stringify(data.token));
  return data;
});

export const getLogin = createAsyncThunk('auth/getLogin', async user => {
  const { data } = await axios.post('/users/login', user);
  token.set(data.token);
  localStorage.setItem('token', JSON.stringify(data.token));
  return data;
});

export const getLogout = createAsyncThunk('auth/getLogout', async user => {
  const { data } = await axios.post('/users/logout', user);
  token.unset();
  localStorage.removeItem('token');
  return data;
});

export const getRefresh = createAsyncThunk('auth/Refresh', async () => {
  try {
    const persistedToken = localStorage.getItem('token');
    persistedToken && token.set(JSON.parse(persistedToken));
    const { data } = await axios.get('/users/current', 'Authorization');
    localStorage.setItem('token', JSON.stringify(data.token));
    return data;
  } catch (error) {
    return '';
  }
});
