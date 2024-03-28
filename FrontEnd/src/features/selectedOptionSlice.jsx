import { createSlice } from '@reduxjs/toolkit';

export const selectedOptionSlice = createSlice({
  name: 'selectedOption',
  initialState: {
    value: null,
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedOption } = selectedOptionSlice.actions;


export default selectedOptionSlice.reducer;
