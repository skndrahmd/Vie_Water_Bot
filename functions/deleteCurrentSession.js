const Session = require('./model'); 


async function deleteCurrentSession(sessionId) {

    try {
  
      // Find and delete session 
      await Session.findByIdAndDelete(sessionId);
  
      console.log('Session deleted successfully');
  
    } catch (error) {
      console.error('Error deleting session:', error); 
    }
  
  }
  
  module.exports = deleteCurrentSession;