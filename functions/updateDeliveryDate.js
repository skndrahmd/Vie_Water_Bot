const updateDeliveryDate = async (session, selected_date) => {
    try{
        session.delivery_date = selected_date.slice(3);

        await session.save();
        console.log("Delivery date updated successfully")

    }
    catch {
        console.log("Delivery date not updated!")
    }


}
  
  module.exports = updateDeliveryDate;
  