const menu = require("../menu");
const menu_eng = require("../menu_eng");
const updateSessionLanguage = require("../updateSessionLanguage");
const updateSessionState = require("../updateSessionState");
const addProductToCart = require("../addProductToCart");
const Session = require("../model");
const connectToDb = require("../connectToDB");
const formatCart = require("../formatCart");
const updateQuantity = require("../updateQuantity");
const showBill = require("../showBill");
const removeProduct = require("../removeProduct");
const updateName = require("../updateName");
const updateAddress = require("../updateAddress");
const deleteCurrentSession = require("../deleteCurrentSession");
const isUserRegistered = require("../isUserRegistered");
const getCurrentAndNextThreeDays = require("../getCurrentAndNextThreeDays");
const getDateByIndex = require("../getDateByIndex");
const updateDeliveryDate = require("../updateDeliveryDate");

connectToDb();

exports.handler = async function (context, event, callback) {
  try {
    let session = await Session.findOne({
      phoneNumber: event.From,
    });

    let registeredUser = isUserRegistered(event.From); //API response

    if (registeredUser && !session) {
      session = new Session({
        phoneNumber: event.From,
        state: "start",
        language: "",
        cart: [],
        total_bill: 0,
        registered_User: true,
      });

      await session.save();
    } else if (!registeredUser && !session) {
      session = new Session({
        phoneNumber: event.From,
        state: "start",
        language: "",
        cart: [],
        total_bill: 0,
        registered_User: false,
      });

      await session.save();
    }

    const twiml = new Twilio.twiml.MessagingResponse();
    const user_message = event.Body.toLowerCase();
    const datesOutput = getCurrentAndNextThreeDays();

    if (user_message && session.state == "start") {
      twiml.message(
        `مرحبا شكراً لتواصلك مع مياه "ڤي ڤي" يسعدنا خدمتك 

      Hello There, Thankyou For Choosing ViVi Waters!\nWe are committed to providing the best bottled drinking water in terms of quality, service, and sustainability. 
      
      Type "en" to Order in English 
      
      اكتب "ar" للطلب باللغة العربية`
      );

      await updateSessionState(session, "language_selection");
    } else if (session.state == "language_selection" && user_message == "en") {
      await updateSessionLanguage(session, user_message);
      twiml.message(menu(user_message));
      await updateSessionState(session, "order_state");
    } else if (session.state == "order_state" && session.language == "en") {
      const order_number = user_message;
      if (order_number >= 1 && order_number <= 9) {
        console.log(menu_eng(order_number));
        await addProductToCart(session, menu_eng(order_number));
        await updateSessionState(session, "quantity_state");
        twiml.message("Please Enter Quantity.");
      } else {
        twiml.message(
          "Please enter a valid product number from the given menu. (1-9)"
        );
      }
    } else if (
      session.state == "quantity_state" &&
      session.language == "en" &&
      user_message == "y"
    ) {
      twiml.message(menu(session.language));
      await updateSessionState(session, "order_state");
    } else if (
      session.state == "quantity_state" &&
      session.language == "en" &&
      user_message == "d"
    ) {
      await removeProduct(session);
      twiml.message(formatCart(session.cart));
      twiml.message(
        `Do You Want To Remove Item ${session.cart.length} From Your Cart?\n( Press D )\nWould You Like To Add Anything Else?\n( Press Y )\nConfirm Order?\n( Press C )`
      );
    } else if (
      session.state == "quantity_state" &&
      session.language == "en" &&
      user_message == "c"
    ) {
      //prompt to enter name
      //change state to enter name
      twiml.message("Please Enter Your Full Name.");
      await updateSessionState(session, "enter_name");
    } else if (session.state == "enter_name" && session.language == "en") {
      //update name in db
      await updateName(session, user_message);
      //prompt for address
      twiml.message("Please Enter Your Address or Address Link.");
      //change state to enter address
      await updateSessionState(session, "enter_address");
    } else if (session.state == "enter_address" && session.language == "en") {
      //update address in db
      const latitude = event.Latitude;
      const longitude = event.Longitude;
      console.log(latitude + " " + longitude);
      await updateAddress(session, latitude + ", " + longitude);
      await updateSessionState(session, "delivery_date");
      twiml.message(
        `Please select when you would like to get your order delivered. Enter the number of the corresponding date.(1-4)\n${datesOutput}`
      );
    } else if (session.state == "quantity_state" && session.language == "en") {
      const quantity = user_message;
      if ((await updateQuantity(session, quantity)) && quantity < 1000) {
        await updateQuantity(session, quantity);
        twiml.message(formatCart(session.cart));
        twiml.message(
          `Do You Want To Remove Item ${session.cart.length} From Your Cart?\n( Press D )\nWould You Like To Add Anything Else?\n( Press Y )\nConfirm Order?\n( Press C )`
        );
      } else {
        twiml.message("Please enter a valid number for the quantity.");
      }
    } else if (session.state == "delivery_date" && session.language == "en") {
      const delivery_number = user_message;
      const selected_date = getDateByIndex(datesOutput, delivery_number);
      await updateDeliveryDate(session, selected_date);

      //show bill
      twiml.message(showBill(session, session.cart));
      //thankyou message
      twiml.message(
        "Thankyou for Shopping with ViVi Waters!\nYour Order Will Be Delivered Soon. \n شكرًا لك على التسوق مع مياه فيفي\n! سيتم تسليم طلبك قريبا."
      );
      //transfer data from mongo db to SAP
      //============//==========================//=================//
      //delete current session
      await deleteCurrentSession(session._id);
    } else {
      twiml.message(
        "Sorry I couldn't understand that, Please enter a valid response."
      );
    }

    callback(null, twiml, context);
  } catch (e) {
    const twiml = new Twilio.twiml.MessagingResponse();
    twiml.message(
      "Sorry, something went wrong, please type in your response again..."
    );
  }
};
