export function ReleaseDate(date) {
  const getDate = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = getDate.getDate();
  const month = months[getDate.getMonth()];
  const year = getDate.getFullYear();

  return `${year} ${month} ${day}`;
}
