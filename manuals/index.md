---
title: Reproduction Vintage Sewing Machine Instruction Manuals
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, eco sewing"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual"

---

<div class="container mb-4">
<div class="row bg-light">
<div class="my-1 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-left">
&nbsp;
</div><!-- end col -->
<div class="my-auto col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 float-none">
  <h4 class="priceheading">Description</h4>
</div><!-- end col -->
<div class="my-auto col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 text-left ">
  <h4 class="priceheading">Pages<br/> excl cover</h4>
</div><!-- end col -->
<div class="my-auto col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5 text-left ">
  <h4 class="priceheading">Price AUD</h4>
</div><!-- end col -->
</div>

{% for item in site.data.manuals %}
<div class="row border border-light border-top-0">
<div class="itemdesc my-auto col-xl-3 col-lg-3 col-md-3 col-xs-3 col-sm-3 col-3 text-center">
{% if item.url == "none" %}
{{item.title}}
{% elsif item.url %}
<a href="{{ item.url }}.html">{{ item.title }}</a>
{% else %}
<a href="{{ item.title }}.html">{{ item.title }}</a>
{% endif %}
<br/>
{% if item.img %}
<img class="img-fluid" alt="{{item.title}}" src="pic/TN-{{item.img}}.jpg" width="200" height="160"/>
{% elsif item.nopicture %}
<p class="text-muted">(no picture)</p>
{% else %}
<img class="img-fluid" alt="{{item.title}}" src="pic/TN-{{item.title}}.jpg" width="200" height="160"/>
{% endif %}
</div><!-- pic col -->
<div class="itemdesc my-auto col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 float-none">
{{item.description}}
 </div><!-- end desc col -->
<div class="itemdesc my-auto col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 text-left ">
{{ item.pages }} pg
</div><!-- end pages col -->
<div class="itemdesc my-auto col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5 text-left">
${{ item.price }}<input type="hidden" id='{{item.title}}' value="{{item.title}}"/><input type="hidden" id='desc-{{item.title}}' value="{{item.description | truncate: 40}}"/><input type="text" size="1" id='qty-{{item.title}}' value="1"/><input type="hidden" id='price-{{item.title}}' value="{{item.price}}"/><button id="btnAdd-{{item.title}}" onclick="addToCart('{{item.title}}');checkExisting('{{item.title}}')">Add</button>
</div><!-- end price col -->
</div><!-- end row -->
{% endfor %}

<div class="row">
<div class="col" align="center">
    <p class="h6 my-4 font-weight-bold"> * digitally restored faithful reproduction
    <br> ** digitally restored faithful reproduction with some editing or added information
    <br> *** fully revised/rewritten using original scanned illustrations</p>
<p class="h6 my-4 font-weight-bold">Unless otherwise stated manuals printed using a laser printer on 80gsm pure white<br/>100% recycled A4 paper with coloured acid free 92gsm to 130 gsm cover at 600 dpi.,<br/>hand compiled &amp; stapled at the spine.<br>
  Paper stock subject to availability and substitution.</p>
<p class="h6 my-4 font-weight-bold">All manual/s are carefully packed in a plastic sleeve and posted at large letter rate. </p>
<p class="h6"><img class="img-fluid my-1" src="{{"pic/MAN-COL.01.jpg"}}" width="500" height="400"></p>
</div><!-- end col -->
</div><!-- end row -->

</div><!-- end container -->
<script src="{{"assets/js/shop.js" | relative_url}}"/></script>
