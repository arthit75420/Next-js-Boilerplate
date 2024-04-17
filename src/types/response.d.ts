import type { IHighlight } from './model';

export interface BaseResponse {
  success: boolean;
}

export interface ResponseGetRooms extends BaseResponse {
  data: IRoomRecommend[];
}

export interface ResponseGetHighlight extends BaseResponse {
  data: IHighlight[];
}
