/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { IHighlight, IRoomRecommend } from '@/types/model';

interface InitStateHomePage {
  roomRecommend: IRoomRecommend[];
  highlight: IHighlight[];
}

const initialState: InitStateHomePage = {
  roomRecommend: [],
  highlight: [],
};

const homePageStoreSlice = createSlice({
  name: 'home_page',
  initialState,
  reducers: {
    setRoomRecommend: (state, action) => {
      state.roomRecommend = action.payload;
    },
    setHighlight: (state, action) => {
      state.highlight = action.payload;
    },
  },
});

export const { setRoomRecommend, setHighlight } = homePageStoreSlice.actions;
export default homePageStoreSlice.reducer;
