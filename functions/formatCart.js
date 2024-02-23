function formatCart(cart) {
    let formattedOutput = "";
  
    if (cart.length > 0) {
        formattedOutput += "Your Cart:\n";
  
        cart.forEach((item, index) => {
            formattedOutput += `${index + 1}. ${item.item} - Quantity: ${item.quantity} - Price: SAR ${item.price.toFixed(2)} - Total Price: SAR ${item.total_price.toFixed(2)}\n`;
        });
    } else {
        formattedOutput = "Your cart is empty.";
    }
  
    return formattedOutput;
  }

  module.exports = formatCart;