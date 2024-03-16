const updateQuantity = async (session, quantity) => {
  try {

    session.cart[session.cart.length - 1].quantity = quantity;

    // Save session to MongoDB
    await session.save();
    console.log(`quantity updated successfully`);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = updateQuantity;
