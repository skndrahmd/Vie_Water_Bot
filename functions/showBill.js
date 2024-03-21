const formatCart = require("./formatCart");
const getAddressFromCoordinates = require("./getAddressFromCoordinates");

function showBill(session) {
  const order_id = session._id;
  const customerName = session.name;
  const customerAddress = session.address["location"];
  const delivery_date = session.delivery_date;
  const time_zone = session.time_zone;
  const alternateName = session.alternate_contact["name"] || "N/A";
  const alternateNumber = session.alternate_contact["phoneNumber"] || "N/A";
  const Cart = formatCart(session.cart);

  const message = `*Order Summary*\n\n*Order ID* : ${order_id}\n\n*Order Name* : ${customerName}\n\n*Order Address* : ${customerAddress}\n\n*Delivery Date*: ${delivery_date}\n\n*Delivery Time Zone*: ${time_zone}\n\n*Alternate Contact Provided*:\nName: ${alternateName}\nPhone number: ${alternateNumber} \n\n${Cart}\n*Total Bill* : SAR ${session.total_bill.toFixed(2)}\n`;

  return message;
}

module.exports = showBill;
