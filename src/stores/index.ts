// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';

import homePageReducer from './homePageSlice';

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
