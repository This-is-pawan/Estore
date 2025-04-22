import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from '../ReduxTool/Reducer'

 const store = configureStore({
 reducer: {
   counter: CounterSlice ,
  },
  
 });

export default store
