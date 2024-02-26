const formatCart = require("./formatCart");
function showBill(session) {
  const order_id = session._id;
  const customerName = session.name;
  const customerAddress = session.address;
  const Cart = formatCart(session.cart);
  const message = `Order ID : ${order_id}\nOrder Name : ${customerName}\nOrder Address : ${customerAddress} \n\n ${Cart}\nTotal Bill : SAR ${session.total_bill.toFixed(2)}\n`;

  return message;
}

module.exports = showBill;
