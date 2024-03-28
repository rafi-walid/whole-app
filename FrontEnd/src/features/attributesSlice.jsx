// In a file named attributesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const attributesSlice = createSlice({
  name: 'attributes',
  initialState: [],
  reducers: {
    setAttributes: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAttributes } = attributesSlice.actions;

export default attributesSlice.reducer;
