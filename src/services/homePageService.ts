import type { AxiosResponse } from 'axios';

import type { ResponseGetHighlight, ResponseGetRooms } from '@/types/response';
import { httpClient } from '@/utils/axios';
import { endpoint } from '@/utils/endpoint';

export const getRoomRecommend = async (): Promise<
  AxiosResponse<ResponseGetRooms>
> => {
  return httpClient.get(
    `${endpoint.GET_ROOM_RECOMMEND}?tracking_code={sbveztwkuVuPKdg7S}&`,
  );
};

export const getHighlight = async (): Promise<
  AxiosResponse<ResponseGetHighlight>
> => {
  return httpClient.get(`${endpoint.GET_HIGHLIGHT}`);
};
