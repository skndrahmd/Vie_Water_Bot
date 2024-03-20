function formatCart(cart) {
    let formattedOutput = "";
  
    if (cart.length > 0) {
        formattedOutput += "*Your Cart* :\n";
  
        cart.forEach((item, index) => {
            formattedOutput += `\n ${index + 1}. ${item.item}\nQuantity : ${item.quantity} \nUnit-Price : SAR ${item.price.toFixed(2)} \nTotal Price : SAR ${item.total_price.toFixed(2)}\n`;
        });
    } else {
        formattedOutput = "Your Cart Is Empty.";
    }
  
    return formattedOutput;
  }

  module.exports = formatCart;