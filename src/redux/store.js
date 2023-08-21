import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./Slice/contactsSlise";
import { filterReducer } from "./Slice/filterSlice";
import { authReducer } from "./Slice/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
