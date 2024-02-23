const formatCart = require("./formatCart");
function showBill(session) {
  const customerName = session.name;
  const customerAddress = session.address;
  const Cart = formatCart(session.cart);
  const message = `Name: ${customerName}\nAddress: ${customerAddress}\n${Cart}\nTotal Bill: SAR ${session.total_bill}`;

  return message;
}

module.exports = showBill;
