---
title: Shop
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"
bodyappend: onload="doShowAll()"

---

<div class="container mb-4">
<div class="row">
<h2>Order form</h2>
</div><!-- end row -->
<div class="row">
Select Product :
<select id="products" style="max-width:300px;">
{% for item in site.data.pricelist %}
<option value="{{ item.title }}">{{item.title}} ${{item.price}} {{ item.description | truncate: 40, '...</p>' }}.  </option>
{% endfor %}
</select>

Quantity :
<input type="text" id="qty" size="2" />
<p/>
<button id="btnAdd" onclick="addToCart()" >Add To Cart</button>
<p />
<table id="cart" border="1" style="visibility:hidden; width:100%">
     <thead>
          <tr>
              <th>Product</th>
              <th class="text-center">Price</th>
              <th class="text-center">Qty</th>
              <th class="text-center">Total</th>
              <th></th>
         </tr>
     </thead>
     <tbody id="cartBody">

     </tbody>
</table>
</div><!-- end row -->
</div><!-- end container -->
<script>
        var cart = [];
        $(function () {
            if (localStorage.cart)
            {
                cart = JSON.parse(localStorage.cart);
                showCart();
            }
        });

        function addToCart() {
            var price = $("#products").val();
            var name = $("#products option:selected").text();
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
    </script>
