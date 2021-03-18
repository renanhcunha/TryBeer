const dateFormatter = (date) => {
  const dateMinusTime = date.split('T')[0];
  const dayMonthYear = dateMinusTime.split('-');
  return `${dayMonthYear[2]}/${dayMonthYear[1]}`;
};

export default dateFormatter;
