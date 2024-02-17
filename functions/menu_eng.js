const menu_eng = (product_number) => {
    
    const cart = []
    const menu = [
        {"index": 1,
        "name": "ViVi Drop 200ml - 32pcs", 
        "price": "SAR 11.50"
     },
     {"index": 2,
        "name": "ViVi 200ml - 48pcs", 
        "price": "SAR 15.90"
     }

    ]

    cart.push(menu[product_number-1])

    const show_cart = cart.map((item) => { 
    return `Your cart ==> 
    Product ${item.index}: ${item.name} - ${item.price}`})
    return show_cart;
}

module.exports = menu_eng;