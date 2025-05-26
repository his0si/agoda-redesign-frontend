export default function formatDateRange(start: string, end: string): string {
  const [startY, startM, startD] = start.split('-');
  const [, endM, endD] = end.split('-');
  return `${startY}.${startM}.${startD}-${endM}.${endD}`;
}
