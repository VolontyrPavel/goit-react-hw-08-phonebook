import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    if (filter)
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    else {
      return items;
    }
  }
);