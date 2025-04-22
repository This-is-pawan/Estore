// ReduxTool/Reducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

export const CounterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.cart += 1;
    },
    decrement: (state) => {
      state.cart -= 1;
    },
    incrementByCart: (state, action) => {
      state.cart += action.payload;
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { increment, decrement, incrementByCart } = CounterSlice.actions;
export default CounterSlice.reducer;
