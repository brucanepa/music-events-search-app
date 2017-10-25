export const getDate = (datetime) => {
  const date = new Date(datetime);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

export const getHour = (datetime) => {
  const date = new Date(datetime);
  const minutes = date.getMinutes() || '00';
  return `${date.getHours()}:${minutes}`;
};