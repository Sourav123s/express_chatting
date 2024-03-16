export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const fullDate = date.toLocaleString();
  return `${fullDate}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
