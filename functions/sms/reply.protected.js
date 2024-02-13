const menu = require("../menu");

exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();

  const user_message = event.Body.toLowerCase();
  const greetings = ["hi", "hello", "hey", "aoa", "marhaba"];
  const Menu = menu();

  if (greetings.includes(user_message)) {
    twiml.message(
      `Welcome to Vivi Water! Would you like to place an order? Say 'order' to see our menu!`
    );
  } else if (user_message == "order") {
    twiml.message(Menu);
  } else {
    return "Sorry i couldnt understand that.";
  }

  callback(null, twiml);
};
