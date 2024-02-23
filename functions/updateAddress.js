const updateAddress = async (session, address) => {

    try{
        session.address = address;

        await session.save();
        console.log("Address updated successfully")

    }
    catch {
        console.log("Address not updated!")
    }

}

module.exports = updateAddress;