const formatCart = require("./formatCart");
function showBill(session) {
  const customerName = session.name;
  const customerAddress = session.address;
  const Cart = formatCart(session.cart);
  const message = `Order ID : ####\nOrder Name : ${customerName}\nOrder Address : ${customerAddress} \n\n ${Cart}\nTotal Bill : SAR ${session.total_bill}\n`;

  return message;
}

module.exports = showBill;
