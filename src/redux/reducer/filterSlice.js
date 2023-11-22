import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',

  initialState: {
    value: '',
  },

  reducers: {
    filterContact(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
