export interface ReservationItem {
  reservationId: string;
  korName: string;
  accommodationImage: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface MyReservationsResponse {
  upcoming: ReservationItem | null;
  completed: ReservationItem[];
}
