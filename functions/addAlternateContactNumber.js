const addAlternateContactNumber = async (session, number) => {

    try{
        session.alternate_contact["phoneNumber"] = number;

        await session.save();
        console.log("Alternate contact number updated successfully")

    }
    catch {
        console.log("alternate contact number not updated!")
    }


}

module.exports = addAlternateContactNumber;