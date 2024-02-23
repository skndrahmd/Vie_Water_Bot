const menu_eng = (product_number) => { 

  

    const menu = [ 

        { 

            "item": "ViVi Drop – 200ml // Carton – 32 Pcs ", 

            "price": 11.50,  

            "quantity": 1, 

            "total_price": 11.50 

        }, 

        { 

            "item": "ViVi – 200ml // Carton – 48 Pcs ", 

            "price": 15.90, 
            "quantity": 1, 

            "total_price": 15.90 

        }, { 

            "item": "ViVi – 200ml // Shrink – 48 Pcs ", 

            "price": 15.45, 

            "quantity": 1, 

            "total_price": 15.45 

        }, { 

"item": "ViVi – 200ml // Shrink – 20 Pcs ", 

            "price": 7.50, 

            "quantity": 1, 

            "total_price": 7.50 

        }, { 

"item": "ViVi – 330ml // Shrink – 24 pcs ", 

              "price": 10.55, 

            "quantity": 1, 

            "total_price": 10.55 

 

        }, { 

        

            "item": "ViVi – 330ml // Carton – 40 Pcs ", 

            "price": 15.90, 

            "quantity": 1, 

            "total_price": 15.90 

 

        }, { 

            "item": "ViVi – 330ml // Carton – 40 Pcs ", 

            "price": 15.90, 

            "quantity": 1, 

            "total_price": 15.90 

        }, { 

             "item": "ViVi – 600ml // Carton – 24 Pcs ", 

            "price": 14.65, 

            "quantity": 1, 

            "total_price": 14.65 

        }, { 

            "item": "ViVi – 1.5ltr // Shrink - 6 Pcs ", 

            "price": 8.40, 

            "quantity": 1, 

            "total_price": 8.40 

 

        } 

  

    ] 

  
    return menu[product_number - 1]; 

}

module.exports = menu_eng;