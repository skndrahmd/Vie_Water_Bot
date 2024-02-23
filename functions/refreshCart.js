const refreshCart = async (session) => {
  try {
    session.cart = [];
    await session.save();
    console.log("cart refreshed successfully");
  } catch {
    console.log("Cart not refreshed.");
  }
};

module.exports = refreshCart;
