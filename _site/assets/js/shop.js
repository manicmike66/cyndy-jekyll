        var cart = [];
        $(function () {
            if (localStorage.cart)
            {
                cart = JSON.parse(localStorage.cart);
                showCart();
            }
        });

        function checkExisting(thing) {
            for (var i in cart) {
                var product = cart[i];
                var btn = 'btnAdd-' + thing;
                if (product.Product == thing){
                    document.getElementById(btn).innerHTML = "Update";
                }
                else {
                    document.getElementById(btn).innerHTML = "Add";
                }
            }
        }
        function addToCart(title) {
/*            var price = $("#price").val();
            var name = $('#products').val();
            var qty = $("#qty").val();*/
/*            var price = document.getElemendById(title).value;*/
            var name = document.getElementById(title).value;
            var priceId = 'price-' + title;
            var qtyId = 'qty-' + title;
            var descId = 'desc-' + title;
            var price = document.getElementById(priceId).value;
            var qty = document.getElementById(qtyId).value;
            var desc = document.getElementById(descId).value;

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
            var item = { Product: name,  Price: price, Qty: qty, Desc: desc }; 
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
