import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducer/filterSlice';
import { contactsReducer } from './reducer/contactsSlice ';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactsReducer,
  },
});
