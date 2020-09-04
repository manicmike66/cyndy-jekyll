        var cart = [];
        $(function () {
            if (localStorage.cart)
            {
                cart = JSON.parse(localStorage.cart);
                showCart();
            }
        });

        function addToCart() {
            var price = $("#price").val();
            var name = $("#products").val();
            var qty = $("#qty").val();

            // update qty if product is already present
            for (var i in cart) {
                if(cart[i].Product == name)
                {
                    cart[i].Qty = qty;
                    showCart();
                    saveCart();
                    return;
                }
            }
            // create JavaScript Object
            var item = { Product: name,  Price: price, Qty: qty }; 
            cart.push(item);
            saveCart();
            showCart();
        }

        function deleteItem(index){
            cart.splice(index,1); // delete item at index
            showCart();
            saveCart();
        }

        function saveCart() {
            if ( window.localStorage)
            {
                localStorage.cart = JSON.stringify(cart);
            }
        }

        function showCart() {
            if (cart.length == 0) {
                $("#cart").css("visibility", "hidden");
                return;
            }

            $("#cart").css("visibility", "visible");
            $("#cartBody").empty();
            for (var i in cart) {
                var item = cart[i];
                var itemtotal = item.Price * item.Qty;
                var row = '<tr><td>' + item.Product + '</td><td class="text-center">$' +
                             item.Price + '</td><td class="text-center">' + item.Qty + '</td><td class="text-center">$'
                             + itemtotal.toFixed(2) + "</td><td>"
                             + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
                $("#cartBody").append(row);
            }
        }
