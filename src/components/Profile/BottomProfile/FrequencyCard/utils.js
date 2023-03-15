export function getToday() {
  return new Date(Date.now());
}
//
export function getCurrentYear(data) {
  // get the most recent year on object
  data = Object.keys(data);
  const current = String(getToday().getFullYear());
  const year = data.find((year) => year === current);
  return year || data[0];
}

export function getCurrentMonthData(year, obj) {
  // get data form the most recent month
  const current = String(getToday().getMonth());
  const months = Object.keys(obj[year]);
  const month = months.find((month) => month === current);
  getMostRecent(Object.values(obj[year]));
  return obj[month] || getMostRecent(Object.values(obj[year]));
}

export function getMostRecent(data) {
  return data[data.length - 1];
}
