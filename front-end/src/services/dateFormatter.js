const dateFormatter = (date) => {
  const localDate = new Date(date).toLocaleString();
  const dayMonthYear = localDate.split('/');
  return `${dayMonthYear[0]}/${dayMonthYear[1]}`;
};

export default dateFormatter;
