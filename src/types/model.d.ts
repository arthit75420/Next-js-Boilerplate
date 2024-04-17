export interface IRoomRecommend {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
  imageUrl: string;
}

export interface IHighlight {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
}
