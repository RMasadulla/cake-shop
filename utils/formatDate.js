export default function formatDate(dateString) {
  const dateObj = new Date(dateString);

  if (isNaN(dateObj)) {
    throw new Error("Invalid date string");
  }

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}
