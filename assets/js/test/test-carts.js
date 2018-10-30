QUnit.module( "Test Carts" );
	QUnit.test( "Test clear carts", function( assert ) {
        // Shopping Cart clear
        carts = cart.clear();
        let values = Array.from(Object.values(carts));
        assert.ok(values.length == 0, "clear passed" );
    });
    
	QUnit.test( "Test add carts", function( assert ) {
        cart.addCarts(1);
        var total = cart.addCarts(2);
	    assert.ok(total == 2, "add cart passed" );
    });

    QUnit.test( "Test carts persistance", function( assert ) {
        cart.addCarts(2);
        cart.addCarts(3);
        var total = cart.init();
	    assert.ok(total == 4, "add cart passed" );
    });

    QUnit.test( "clear cache data", function( assert ) {
        // Shopping Cart clear
        carts = cart.clear();
        let values = Array.from(Object.values(carts));
        assert.ok(values.length == 0, "clear passed" );
    });