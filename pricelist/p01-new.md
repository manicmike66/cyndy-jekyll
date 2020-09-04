---
title: Belts, Balance Wheels, Hand Cranks & Electric Motors
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"
bodyAppend: onLoad="showCart()"

---

<script>
console.log(localStorage.cart);
</script>

<div class="container mb-4 text-center">
<table id="cart" border="1" style="visibility:hidden;width:100%">
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
<div class="row bg-light">
<div class="m-2 col-lg-3 col-md col-sm-3 text-left">
&nbsp;
</div><!-- end col -->
<div class="m-2 col-lg-2 col-md col-sm-1 text-left">
  <h4>Stock code</h4>
</div><!-- end col -->
<div class="m-2 col-lg-4 col-md col-sm-5 text-left">
  <h4>Description</h4>
</div><!-- end col -->
<div class="m-2 col-lg-2 col-md col-sm-1 text-left">
  <h4>Price AUD</h4>
</div><!-- end col -->
</div><!-- end row -->

{% for item in site.data.pricelist %}
{% if item.section == "p01" %}
<div class="row">
<div class="m-2 col-lg-3 col-sm-3 col-md-3 vertical-center text-right">
{% if item.img2 %}
<a href="../stock/{{ item.url }}.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('{{ item.title }}','','../stock/pic/PIC-DRV/TN/tn_{{ item.title}}.02.jpg',1)"><img name="{{ item.title }}" class="img-fluid" src="../stock/pic/PIC-DRV/TN/tn_{{ item.title }}.jpg" width="200" height="160" border="0"></a>
{% else %}
<img class="img-fluid" src="../stock/pic/PIC-{% if item.subsec %}{{item.subsec}}{%else%}BLT{%endif%}/TN/{{item.title}}.jpg" width="200" height="160">
{% endif %}
</div><!-- end col -->
{% if item.title2 %}
<div class="m-2 col-lg-2 col-sm-1 col-md-1 pt-3 text-left">
{% else %}
<div class="m-2 col-lg-2 col-sm-1 col-md-1 vertical-center text-left">
{% endif %}
{% if item.url %}
<p><a href="../stock/{{ item.url }}.html">{{ item.title }}</a></p>
{% else %} <p>{{ item.title }}</p>
{% endif %}
{% if item.url2 %}
<p><a href="../stock/{{ item.url2 }}.html">{{ item.title2 }}</a></p>
{% else %} <p>{{ item.title2 }}</p>
{% endif %}
</div><!-- end col -->
{% if item.description2 %}
<div class="m-2 col-lg-3 col-sm-5 col-md-5 pt-3 text-left">
{% else %}
<div class="m-2 col-lg-3 col-sm-5 col-md-5 vertical-center text-left">
{% endif %}
{{ item.description }}
{% if item.description2 %}
{{ item.description2 }}
{% endif %}
</div><!-- end col -->
{% if item.description2 %}
<div class="m-2 col-lg-3 col-sm-1 col-md-1 pt-3 text-left">
{% else %}
<div class="m-2 col-lg-3 col-sm-1 col-md-1 vertical-center text-left">
{% endif %}
<p><span class="px-2">${{ item.price }}</span><span class="px-2"><input type="hidden" id='{{item.title}}' value="{{item.title}}"/><input type="hidden" size="1" id='desc-{{item.title}}' value="{{item.description | truncate: 50}}"/><input type="text" size="1" id='qty-{{item.title}}' value="1"/><input type="hidden" id='price-{{item.title}}' value="{{item.price}}"/><button id="btnAdd-{{item.title}}" onclick="addToCart('{{item.title}}');checkExisting('{{item.title}}')">Add</button><button id="btnDel-{{item.title}}" style="visibility:hidden" onclick="delFromCart('{{item.title}}');checkExisting('{{item.title}}')">Del</button></span></p>
{% if item.price2 %}
<p><span class="px-2">${{ item.price2 }}</span><span class="px-2"><input type="hidden" id='{{item.title2}}' value="{{item.title2}}"/><input type="hidden" size="1" id='desc-{{item.title2}}' value="{{item.description2 | truncate: 50}}"/><input type="text" size="1" id='qty-{{item.title2}}' value="1"/><input type="hidden" id='price-{{item.title2}}' value="{{item.price2}}"/><button id="btnAdd-{{item.title2}}" onclick="addToCart('{{item.title2}}');checkExisting('{{item.title2}}')">Add</button></span></p>
{% endif %}
</div><!-- end col -->
</div><!-- end row -->
{% endif %}
{% endfor %}
<script src="{{"assets/js/shop.js" | relative_url}}"/></script>
</div>
