const removeProduct = async (session) =>{
    try{
        session.cart.pop();
        await session.save();
        console.log("Product removed successfully")

    }
    catch{

        console.log("Not removed!");

    }
}

module.exports = removeProduct;