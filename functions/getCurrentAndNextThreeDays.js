function getCurrentAndNextThreeDays() {
  const today = new Date();
  const formattedDates = [];

  const currentDateObj = new Date(today.getTime());
  const currentDayName = getDayName(currentDateObj.getDay());
  const currentFormattedDate = `1. ${currentDayName}, ${formatDate(currentDateObj)}`;
  formattedDates.push(currentFormattedDate);

  for (let i = 1, index = 2; i < 5; i++, index++) {
    const nextDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    const nextDayName = getDayName(nextDate.getDay());
    const nextFormattedDate = `${index}. ${nextDayName}, ${formatDate(nextDate)}`;
    formattedDates.push(nextFormattedDate);
  }

  const datesString = formattedDates.join('\n');
  return datesString;
}

function getDayName(dayIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear() % 100; // Get the last two digits of the year
  return `${day}/${month}/${year}`;
}

module.exports = getCurrentAndNextThreeDays;