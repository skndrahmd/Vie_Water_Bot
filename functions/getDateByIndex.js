function getDateByIndex(datesOutput, indexNumber) {
    // Split the datesOutput string into an array of lines
    const dateLines = datesOutput.split('\n');
  
    // Check if the indexNumber is valid
    if (indexNumber < 1 || indexNumber > dateLines.length) {
      return 'Invalid index number. Please enter a number between 1 and ' + dateLines.length;
    }
  
    // Retrieve the date from the dateLines array based on the indexNumber
    const chosenDate = dateLines[indexNumber - 1];
  
    return chosenDate;
  }

  module.exports = getDateByIndex;