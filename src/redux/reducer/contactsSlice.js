import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    createContact(state, action) {
      state.value.push(action.payload);
    },
    removeContact(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { createContact, removeContact } = contactsSlice.actions;
