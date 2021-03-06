const getWeekNumber = (date) => {
  const currentdate = date ? date : new Date();
  const oneJan = new Date(currentdate.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (currentdate - oneJan) / (24 * 60 * 60 * 1000)
  );
  const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
  return result;
};

const numberOfWeekInMonth = (year, month) => {
  return 4;
};

export { getWeekNumber, numberOfWeekInMonth };
