export interface BaseResponse {
  success: boolean;
}

export interface ResponseGetRooms extends BaseResponse {
  data: IRoomRecommend[];
}

export interface ResponseGetHighlight extends BaseResponse {
  data: IHighlight[];
}

export interface ResponseGetAnnounce extends BaseResponse {
  data: IAnnounce[];
}
