const menu_eng = (product_number) => {

    const cart = []
    const menu = [
        {
            "index": 1,
            "name": "ViVi Drop – 200ml // Carton – 32 Pcs ",
            "price": "Was SAR 16.10 Now SAR 11.50 "
        },
        {
            "index": 2,
            "name": "ViVi – 200ml // Carton – 48 Pcs ",
            "price": "SAR 15.90"
        }, {
            "index": 3,
            "name": "ViVi – 200ml // Shrink – 48 Pcs ",
            "price": "SAR 15.45"
        }, {
            "index": 4,
            "name": "ViVi – 200ml // Shrink – 20 Pcs ",
            "price": "SAR 7.50"
        }, {
            "index": 5,
            "name": "ViVi – 330ml // Shrink – 24 pcs ",
            "price": "SAR 10.55"
        }, {
            "index": 6,
            "name": "ViVi – 330ml // Carton – 40 Pcs ",
            "price": "SAR 15.90"
        }, {
            "index": 7,
            "name": "ViVi – 330ml // Carton – 40 Pcs ",
            "price": "SAR 15.90"
        }, {
            "index": 8,
            "name": "ViVi – 600ml // Carton – 24 Pcs ",
            "price": "SAR 14.65"
        }, {
            "index": 9,
            "name": "ViVi – 1.5ltr // Shrink - 6 Pcs ",
            "price": "SAR 8.40"
        }

    ]

    cart.push(menu[product_number - 1])

    const show_cart = cart.map((item) => {
        return `Your cart ==>
    Product ${item.index}: ${item.name} - ${item.price}`
    })
    return show_cart;
}

module.exports = menu_eng;