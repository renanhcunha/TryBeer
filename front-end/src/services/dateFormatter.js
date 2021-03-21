const dateFormatter = (date) => {
  console.log(date);
  const localDate = new Date(date).toLocaleDateString();
  console.log(localDate);
  const dayMonthYear = localDate.split('/');
  return `${dayMonthYear[0]}/${dayMonthYear[1]}`;
};

export default dateFormatter;
