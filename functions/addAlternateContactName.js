const addAlternateContactName = async (session, name) => {

    try{
        session.alternate_contact["name"] = name;

        await session.save();
        console.log("Alternate contact name updated successfully")

    }
    catch {
        console.log("alternate contact name not updated!")
    }


}

module.exports = addAlternateContactName;