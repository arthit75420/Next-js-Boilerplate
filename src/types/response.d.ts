export interface BaseResponse {
  success: boolean;
}

export interface ResponseGetRooms extends BaseResponse {
  data: IRoomRecommend[];
}

export interface IRoomRecommend {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
  imageUrl: string;
}
