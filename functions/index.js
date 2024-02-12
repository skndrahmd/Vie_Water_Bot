exports.handler = function(context, event, callback) {
    const assets = Runtime.getAssets();
    const privateMessageAsset = assets['/conversation.js'];
    const privateMessagePath = privateMessageAsset.path;
    const conversation = require(privateMessagePath);
    const twiml = new Twilio.twiml.MessagingResponse();
    const response = event
    twiml.message(conversation(response));
    callback(null, twiml);
  };
  