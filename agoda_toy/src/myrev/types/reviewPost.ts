export type ReviewPostData = {
  reservationId: number;
  locationScore: number;
  cleanScore: number;
  serviceScore: number;
  reviewText: string;
  reviewImages: string[];
};
