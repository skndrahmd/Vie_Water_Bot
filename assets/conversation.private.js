const conversation = (userMessage) => {

    const user_message = userMessage.Body

    if (user_message == 'Hello'){
        return `Welcome to Vive Water! Would you like to place an order? Say 'Order' to see our menu!`
    }
    else if (user_message == "Order"){
        return `
        This is our list of products, please select the item number and quantity:
1. 500ml water Bottle - 100 PKR
2. 3L water bottle - 80 PKR
Please enter your choice followed by the space and then the quantity.;
        `
    }
    else {
        return "Sorry i couldnt understand that"
    }


}

module.exports = conversation;