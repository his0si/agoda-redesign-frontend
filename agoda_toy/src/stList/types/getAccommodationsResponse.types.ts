export interface Accommodation {
  accommodationId: number;
  korName: string;
  engName: string;
  star: number;
  accommodationImage: string;
  location: string;
  totalScore: number;
  reviewCount: number;
  price: number;
  discountPrice: number;
  totalPrice: number;
  provisionTags: string[];
}

export interface GetAccommodationsResponse {
  accommodations: Accommodation[];
  currentPage: number;
  totalPage: number;
  totalCount: number;
}
