---
title: Cart
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"
bodyAppend: onLoad="showCart()"

---

<script>
if (localStorage.cart)
{ cart = JSON.parse(localStorage.cart);
console.log($cart);
}
</script>

<div class="container mb-4 text-center">
<table id="cart" border="1" style="visibility:visible;width:100%">
     <thead>
          <tr>
              <th>Product</th>
              <th class="text-center">Price</th>
              <th class="text-center">Qty</th>
              <th class="text-center">Total</th>
         </tr>
     </thead>
     <tbody id="cartBody">
<script>
var allItems = localStorage.getItem(localStorage.key(1));
var items = JSON.parse(allItems);
for (i = 0; i < items.length; i++)   {
        document.write("<tr><td>" + items[i].Product + " " + items[i].Desc + "</td><td>$" + items[i].Price + "</td><td>" + items[i].Qty + "</td><td>$" + (items[i].Qty * items[i].Price).toFixed(2) + "</td></tr>");
}
</script>
     </tbody>
</table>
<script src="{{"assets/js/shop.js" | relative_url}}"/></script>
</div>
