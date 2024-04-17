/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { IRoomRecommend } from '@/types/response';

interface InitStateHomePage {
  roomRecommend: IRoomRecommend[];
}

const initialState: InitStateHomePage = {
  roomRecommend: [],
};

const homePageStoreSlice = createSlice({
  name: 'home_page',
  initialState,
  reducers: {
    setRoomRecommend: (state, action) => {
      state.roomRecommend = action.payload;
    },
  },
});

export const { setRoomRecommend } = homePageStoreSlice.actions;
export default homePageStoreSlice.reducer;
