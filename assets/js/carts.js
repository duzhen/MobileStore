var cart;
(function () {
//Shopping cart
    var carts = JSON.parse(localStorage.getItem('shoppingcarts'));
    var products;
    cart = {
        init: function(p) {
            products = p;
            console.log(carts)
            if(!carts) {
                carts = {}
            } else {
                cart.setCarts(carts);
            }
            var clearBtn = $('.shopping-cart button');
            clearBtn.on('click', function (e) {
                e.preventDefault();
                carts = {};
                cart.setCarts(carts);
                cart.renderCart();
            });
        },
        addCarts: function(index) {
            // If the cart for this specification isn't created yet - do it.
			if(!carts[index]){
				carts[index] = 0;
			}
			carts[index]++;
			cart.setCarts(carts);
        },
        setCarts: function(carts) {
            localStorage.setItem('shoppingcarts',JSON.stringify(carts));
            let values = Array.from(Object.values(carts));
            $('.tempo .cart').text("Cart "+values.reduce((a, b) => a + b, 0))
        },

        renderCart: function() {
            var allProducts = $('.all-products .products-list > li');

            // Hide all the products in the products list.
            allProducts.addClass('hidden');
    
            var page = $('.shopping-cart');
            var list = $('.shopping-cart .shopping-cart-list');
    
            var theTemplateScript = $("#shopping-cart-template").html();
            //Compile the template
            var theTemplate = Handlebars.compile (theTemplateScript);
            var results = []
            products.forEach(function (item){
                if(carts[item.id]) {
                    item.quantity = carts[item.id]
                    results.push(item)
                }
            });
            $('.shopping-cart .shopping-cart-list li').remove();
            list.append (theTemplate(results));
            // Show the page.
            page.addClass('visible');
        }
    }
})();