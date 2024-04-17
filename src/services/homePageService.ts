import type { AxiosResponse } from 'axios';

import type { ResponseGetRooms } from '@/types/response';
import { httpClient } from '@/utils/axios';
import { endpoint } from '@/utils/endpoint';

export const getRoomRecommend = async (): Promise<
  AxiosResponse<ResponseGetRooms>
> => {
  return httpClient.get(
    `${endpoint.GET_ROOM_RECOMMEND}?tracking_code={sbveztwkuVuPKdg7S}&`,
  );
};
