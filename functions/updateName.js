const updateName = async (session, name) => {

    try{
        session.name = name;

        await session.save();
        console.log("Name updated successfully")

    }
    catch {
        console.log("Name not updated!")
    }


}

module.exports = updateName;