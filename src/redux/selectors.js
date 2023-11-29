import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filters) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);
