export function generateIsoFormattedDate(normalDate) {
  const dataObject = new Date(normalDate);
  const isoFormattedDate = dataObject.toISOString();
  return isoFormattedDate;
}
