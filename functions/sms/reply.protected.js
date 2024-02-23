const menu = require("../menu");
const menu_eng = require("../menu_eng");
const updateSessionLanguage = require("../updateSessionLanguage");
const updateSessionState = require("../updateSessionState");
const addProductToCart = require("../addProductToCart");
const Session = require("../model");
const connectToDb = require("../connectToDB");
const refreshCart = require("../refreshCart");
const formatCart = require("../formatCart");
const updateQuantity = require("../updateQuantity");
const showBill = require("../showBill");
const removeProduct = require("../removeProduct");
const updateName = require("../updateName");
const updateAddress = require("../updateAddress");

connectToDb();


exports.handler = async function (context, event, callback) {
  let session = await Session.findOne({
    phoneNumber: event.From,
  });

  if (!session) {
    console.log("Session not found, making new one!");
    session = new Session({
      phoneNumber: event.From,
      state: "start",
      language: "",
      cart: [],
      total_bill: 0,
    });

    await session.save();
  }



  const twiml = new Twilio.twiml.MessagingResponse();
  const user_message = event.Body.toLowerCase();
  //await refreshCart(session);
  
  if (user_message == "hello" && session.state == "start") {
    twiml.message(
      `مرحبا شكراً لتواصلك مع مياه "ڤي ڤي" يسعدنا خدمتك 

      Hi there! 
      
      Thank you for contacting ViVi Waters. We are committed to providing the best bottled drinking water in terms of quality, service, and sustainability. 
      
      Type "en" to Order in English 
      
      اكتب "ar" للطلب باللغة العربية`
    );
    await updateSessionState(session, "language_selection");
  } 
  
  else if ((session.state == "language_selection" && user_message == "en") || (session.state == "language_selection" && user_message == "ar")) {
    await updateSessionLanguage(session, user_message);
    twiml.message(menu(user_message));
    await updateSessionState(session, "order_state");
  } 
  
  else if (session.state == "order_state" && session.language == "en") {
    const order_number = user_message;
    console.log(menu_eng(order_number));
    await addProductToCart(session, menu_eng(order_number));
    await updateSessionState(session, "quantity_state");
    twiml.message("Please enter quantity.");
  }

  else if(session.state == "quantity_state" && session.language == "en" && user_message == "y"){
    twiml.message(menu(session.language));
    await updateSessionState(session, "order_state");
  }

  else if(session.state == "quantity_state" && session.language == "en" && user_message == "d"){
    await removeProduct(session);
    twiml.message(formatCart(session.cart));
    twiml.message(`Do you want to remove item ${session.cart.length} from your cart?\n(Press D to remove)\nWould you like to add anything else?(Press Y)\nConfirm order? (Press C)`)
  }

  else if(session.state == "quantity_state" && session.language == "en" && user_message == "c"){
    //prompt to enter name
    //change state to enter name
   twiml.message("Please enter your full name.");
   await updateSessionState(session, "enter_name");
  }

  else if(session.state == "enter_name" && session.language == "en"){
    //update name in db
    await updateName(session, user_message)
    //prompt for address 
    twiml.message("Please enter your address, or address link.");
    //change state to enter address
    await updateSessionState(session, "enter_address");

  }

  else if(session.state == "enter_address" && session.language == "en"){ 
    //update address in db 
    await updateAddress(session, user_message);
    //show bill 
    twiml.message(showBill(session, session.cart));
    //thankyou message 
    twiml.message("Thank you for shopping with ViVi Water! Your order will be delivered soon.");
    //change state to start
    await updateSessionState(session, "start");
  }

  else if(session.state == "quantity_state" && session.language == "en"){
    const quantity = user_message;
    await updateQuantity(session, quantity);
    //showCart(session);
    twiml.message(formatCart(session.cart));
    twiml.message(`Do you want to remove item ${session.cart.length} from your cart?\n(Press D to remove)\nWould you like to add anything else?\n(Press Y)\nConfirm order? (Press C)`)
  }

  else {
    twiml.message(
      "Sorry I could not understand that, please enter the correct option."
    );
  }

  callback(null, twiml, context);
};
