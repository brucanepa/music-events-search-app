export const getDate = (datetime) => {
  const date = new Date(datetime);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const getHourWithMinutes = (datetime) => {
  const date = new Date(datetime);
  const minutes = date.getMinutes() || '00';
  return `${date.getHours()}:${minutes}`;
};
