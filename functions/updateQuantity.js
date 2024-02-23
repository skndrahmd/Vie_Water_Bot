const updateQuantity = async (session, quantity) => {
    try {
        // Update session language
        session.cart[session.cart.length - 1].quantity = quantity;
    
        // Save session to MongoDB
        await session.save();
        console.log(`quantity updated successfully`);
      } catch (err) {
        console.log("Error updating quantity", err);
      }
}

module.exports = updateQuantity;