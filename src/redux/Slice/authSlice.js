import { createSlice } from '@reduxjs/toolkit';
import { getRegister, getLogin, getLogout, getRefresh } from '../operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, { error }) => {
  state.loading = false;
  state.error = error.message;
};

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {},
    token: null,
    isLoggedIn: null,
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      .addCase(getRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addCase(getLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addCase(getLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
        state.token = null;
        state.isLoggedIn = null;
      })

      .addCase(getRefresh.fulfilled, (state, { payload }) => {
        state.loading = false;
      })

      .addMatcher(actions => actions.type.endsWith('/pending'), handlePending)
      .addMatcher(actions => actions.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
