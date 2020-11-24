import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@com/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
