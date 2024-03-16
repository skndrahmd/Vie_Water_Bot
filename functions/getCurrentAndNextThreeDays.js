function getCurrentAndNextThreeDays() {
  const today = new Date();
  const formattedDates = [];

  const currentDateObj = new Date(today.getTime());
  const currentDayName = getDayName(currentDateObj.getDay());
  const currentFormattedDate = `1. ${currentDayName}, ${currentDateObj.toDateString()}`;
  formattedDates.push(currentFormattedDate);

  for (let i = 1, index = 2; i < 4; i++, index++) {
    const nextDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const nextDayName = getDayName(nextDate.getDay());
    const nextFormattedDate = `${index}. ${nextDayName}, ${nextDate.toDateString()}`;
    formattedDates.push(nextFormattedDate);
  }

  const datesString = formattedDates.join('\n');
  return datesString;
}

function getDayName(dayIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}

module.exports = getCurrentAndNextThreeDays;
