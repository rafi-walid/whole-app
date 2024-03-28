import { createSlice } from '@reduxjs/toolkit';


const attributesSelectedSlice = createSlice({
  name: 'attributesSelected',
  initialState: [],
  reducers: {
    addAttribute(state, action) {
      state.push(action.payload); 
    },
    removeAttribute(state, action) {
      state = state.filter(attribute => attribute !== action.payload); 
    },
    resetAttributes(state) {
      return [] 
    }
  },
});

export const { addAttribute, removeAttribute, resetAttributes } = attributesSelectedSlice.actions;
export default attributesSelectedSlice.reducer;
