/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { IAnnounce, IHighlight, IRoomRecommend } from '@/types/model';

interface InitStateHomePage {
  roomRecommend: IRoomRecommend[];
  highlight: IHighlight[];
  announce: IAnnounce[];
}

const initialState: InitStateHomePage = {
  roomRecommend: [],
  highlight: [],
  announce: [],
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
    setAnnounce: (state, action) => {
      state.announce = action.payload;
    },
  },
});

export const { setRoomRecommend, setHighlight, setAnnounce } =
  homePageStoreSlice.actions;
export default homePageStoreSlice.reducer;
