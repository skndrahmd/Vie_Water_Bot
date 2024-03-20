const selectTimeZone = async (session, option) => {
  try {
    if (option == 1) {
      session.time_zone = "08:00 AM to 02:00 PM";

      await session.save();
      console.log("Time Zone: 08:00 AM to 02:00 PM");
    } else if (option == 2) {
      session.time_zone = "04:00 PM to 09:00 PM";

      await session.save();
      console.log("Time Zone: 04:00 PM to 09:00 PM");
    }
  } catch {
    console.log("Time zone not updated!");
  }
};

module.exports = selectTimeZone;
