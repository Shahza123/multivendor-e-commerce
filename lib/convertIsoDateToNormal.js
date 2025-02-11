export  function convertIsoDateToNormal(isoDate) {
  // Create a new Date object from the ISO string
  const date = new Date(isoDate);

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  // Return the date in the desired format (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
}

// // Example usage:
// const isoString = "2024-10-14T15:45:00.000Z";  // Example ISO date
// const normalDate = convertIsoDateToNormal(isoString);

