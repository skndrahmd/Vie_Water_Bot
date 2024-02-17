const menu = require("../menu");
const menu_eng = require("../menu_eng");
const mongoose = require("mongoose");

// Define schema
const sessionSchema = new mongoose.Schema({
  phoneNumber: String,
  language: String,
});

const Session = mongoose.model("Session", sessionSchema);

async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://vive:vive123@cluster0.mhzyvix.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

async function updateSessionLanguage(session, language) {

  // Update session language 
  session.language = language;

  // Save session to MongoDB
  try {
    await session.save();
    console.log('Session updated!');
  } catch (err) {
    console.log('Error saving session', err);
  }

}

connectToDb();

exports.handler = async function (context, event, callback) {


  let session = await Session.findOne({
    phoneNumber: event.From,
  });

  // Create new session if one doesn't exist
  if (!session) {
    // Create new Session document
    session = new Session({
      phoneNumber: event.From,
      language: "en",
    });

    // Save session to database
    await session.save();
  }

  console.log(session.language);

  const twiml = new Twilio.twiml.MessagingResponse();

  if (event.Body.includes("Hello")) {
    twiml.message(
      "Hi welcome to vive bot! Enter 'en' for English or 'ar' for Arabic"
    );
  } else if (event.Body.includes("En")) {
    await updateSessionLanguage(session, 'en');
    twiml.message(menu("1"));
  } else if (event.Body.includes("Ar")) {
    await updateSessionLanguage(session, 'ar');
    twiml.message(menu("2"));
  } 
  else if(session.language == 'en' && event.Body == 1){
    twiml.message("U entered 1 in english");
  }
  else if(session.language == 'ar' && event.Body == 1){
    twiml.message("U entered 1 in arabic")
  }  

  // Pass updated context to callback
  callback(null, twiml, context);
};
