<script>
var allItems = localStorage.getItem('cart');
var items = JSON.parse(allItems);
{% capture itemnumber %}items.length{% endcapture %}
document.write('There are ' + items.length + ' items ({{itemnumber}}) in your basket');
</script>
<table id="cart1" border="1" class="mb-3" style="visibility:{% if itemnumber == 0 %}hidden{%else%}visible{%endif%};width:100%">
 <thead>
  <tr>
  <th>Product</th>
  <th class="text-center">Price</th>
  <th class="text-center">Qty</th>
  <th class="text-center">Total</th>
  <th class="text-center">Delete Item</th>
 </tr>
 </thead>
 <tbody id="cartBody">
<script>
for (i = 0; i < items.length; i++)   {
    document.write("<tr><td>" + items[i].Product + " " + items[i].Desc + "</td><td>$" + items[i].Price + "</td><td>" + items[i].Qty + "</td><td>$" + (items[i].Qty * items[i].Price).toFixed(2) + "</td><td><button onClick='removeSomething(\"" + items[i].Product + "\")'>Delete</button></td></tr>");
}
</script>
 </tbody>
</table>
