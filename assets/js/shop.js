        var cart = [];// create new array var to hold products
        /*$(function () {*/
            if (localStorage.cart)// if the key (with the same name as the array) exists...
            {
                cart = JSON.parse(localStorage.cart);//populate the array. 
                showCart();// and show the existing cart items
            }
        /*});*/

        function checkExisting(thing) {// purpose is to change the button text
            document.getElementById("cartlink").style.visibility = "visible";
            for (var i in cart) {
                var product = cart[i];
                var btn = 'btnAdd-' + thing;// thing is the product code
                if (product.Product == thing){
                    document.getElementById(btn).innerHTML = "Added";
                }
                else {
                    document.getElementById(btn).innerHTML = "Add";
                }
            }
        }

        function addToCart(title) {// adding an item means...
            var name = document.getElementById(title).value;// don't know why I didn't just say name=title
            var priceId = 'price-' + title;// price IDs are price-title
            var qtyId = 'qty-' + title;// same with quantity
            var descId = 'desc-' + title;// same with description
            var price = document.getElementById(priceId).value;// set the value of price
            var qty = document.getElementById(qtyId).value;// set the quantity
            var desc = document.getElementById(descId).value;// set the description

            // update qty if product is already present
            for (var i in cart) {
                if(cart[i].Product == name)
                {
                    cart[i].Qty = qty;
                    showCart();// when finished, show the table
                    saveCart();// then update the values
                    return;
                }
            }
 
            // create JavaScript Object
            var item = { Product: name,  Price: price, Qty: qty, Desc: desc }; 
            cart.push(item);// push it onto the array as an object
            saveCart();
            showCart();
        }


        function deleteItem(index){
            cart.splice(index,1); // delete item at index
            saveCart();
            showCart();
        }

        function saveCart() {
            if ( window.localStorage)
            {
                localStorage.cart = JSON.stringify(cart);// convert object/s back to single JSON string and store to localStorage.cart
            }
        }

        function showCart() {
            if (cart.length == 0) {
                $("#cart").css("visibility", "hidden");
                $("#cart1").css("visibility", "hidden");
                return;
            }

            $("#cart").css("visibility", "hidden");// changed this
            $("#cart1").css("visibility", "visible");// changed this
            $("#cartBody").empty();
            for (var i in cart) {
                var item = cart[i];
                var itemtotal = item.Price * item.Qty;
                var row = '<tr><td>' + item.Product + item.Desc + '</td><td class="text-center">$' +
                             item.Price + '</td><td class="text-center">' + item.Qty + '</td><td class="text-center">$'
                             + itemtotal.toFixed(2) + "</td><td>"
                             + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
                $("#cartBody").append(row);
            }
        }
