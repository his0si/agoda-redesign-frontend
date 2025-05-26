type ReservationStatus =
  | '예약 완료'
  | '체크인 완료'
  | '체크아웃 완료'
  | '취소된 예약';

export default interface ResItem {
  reservationId: string;
  korName: string;
  accommodationImage: string;
  location: string;
  startDate: string;
  endDate: string;
  status: ReservationStatus;
}
