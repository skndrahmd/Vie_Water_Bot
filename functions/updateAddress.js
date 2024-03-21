const updateAddress = async (session, lat, long, location) => {

    try{
        session.address["lat"] = lat;
        session.address["long"]= long;
        session.address["location"] = location;

        await session.save();
        console.log("Address coordinates updated successfully")

    }
    catch {
        console.log("Address not updated!")
    }

}

module.exports = updateAddress;