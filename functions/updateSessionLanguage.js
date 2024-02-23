async function updateSessionLanguage(session, newLanguage) {
  try {
    // Update session language
    session.language = newLanguage;

    // Save session to MongoDB
    await session.save();
    console.log(`Session language updated: ${session.language}`);
  } catch (err) {
    console.log("Error saving session", err);
  }
}


  module.exports = updateSessionLanguage;