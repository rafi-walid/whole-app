import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: true,
  reducers: {
    toggleSwitch: state => !state,
  },
});

export const { toggleSwitch } = toggleSlice.actions;

export default toggleSlice.reducer;