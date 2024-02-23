const addProductToCart = async (session, product) => {
    const cart = session.cart || [];
  
    try {
      cart.push(product);
      await session.save();
      console.log(`Product added to cart ${product.item}`);
    } catch (err) {
      console.log("Product was not added to cart!", err);
    }
  };

  module.exports = addProductToCart;