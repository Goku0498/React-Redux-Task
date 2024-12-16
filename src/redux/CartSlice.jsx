import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "Card",
  initialState: {
    quantities: {},
  },
  reducers: {
    savealldata: (state, action) => {
      return action.payload;
    },
    increment: (state, action) => {
      let { id } = action.payload;
      state.quantities[id] = (state.quantities[id] || 0) + 1;
    },
    decrement: (state, action) => {
      let { id } = action.payload;
      if (state.quantities[id] && state.quantities[id] > 0) {
        state.quantities[id] -= 1;
      }
    },
  },
});

export const { savealldata, increment, decrement } = cardSlice.actions;
export default cardSlice.reducer;
