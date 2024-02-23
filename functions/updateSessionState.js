async function updateSessionState(session, newState) {
  try {
    // Update session state
    session.state = newState;

    // Save session to MongoDB
    await session.save();
    console.log(`Session state updated: ${session.state}`);
  } catch (err) {
    console.log("Error saving session", err);
  }
}

  module.exports = updateSessionState;