import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData(state, action) {
      return action.payload;
    },
  },
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;