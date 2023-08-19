import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, { error }) => {
  state.loading = false;
  state.error = error.message;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })

      .addMatcher(actions => actions.type.endsWith('/pending'), handlePending)
      .addMatcher(actions => actions.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
