---
title: Reproduction Vintage Sewing Machine Instruction Manuals
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, eco sewing"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual"
location: "South Eastern New South Wales, Southern Tablelands, Southern Highlands, Goulburn, New South Wales, Australia.  Custom clothing and costume.  Craft accesories "

---

<div class="container mb-4">
<div class="row">
<div class="col-1">&nbsp;</div><!-- left col -->
<div class="col-2">&nbsp;</div><!-- pic col -->
<div class="col-4 h4">
      Description
</div><!-- end right col -->
<div class="col-2 h4">No. Pages excl cover</div><!-- end col -->
<div class="col-1 h4">Price</div><!-- end col -->
<div class="col-2">&nbsp;</div><!-- RH col -->
</div><!-- end row -->

{% for item in site.data.manuals %}
<div class="row my-3">
<div class="col-3 text-center">
{% if item.url == "none" %}
{{item.title}}
{% elsif item.url %}
<a href="{{ item.url }}.html">{{ item.title }}</a>
{% else %}
<a href="{{ item.title }}.html">{{ item.title }}</a>
{% endif %}
<br/>
{% if item.img %}
<img class="img-fluid" src="pic/TN-{{item.img}}.jpg" width="200" height="160"/>
{% else %}
<img class="img-fluid" src="pic/TN-{{item.title}}.jpg" width="200" height="160"/>
{% endif %}
</div><!-- pic col -->
<div class="col-5 py-3 vertical-center">
{{item.description}}
 </div><!-- end desc col -->
<div class="col-1 vertical-center">
{{ item.pages }}
</div><!-- end price col -->
<div class="col-1 vertical-center">
${{ item.price }}
</div><!-- end price col -->
<div class="col-2">&nbsp;</div><!-- right col -->
</div><!-- end row -->
{% endfor %}
<div class="row my-4">
<div class="col-1">&nbsp;</div><!-- left col -->
<div class="col-2">&nbsp;</div><!-- pic col -->
<div class="col-5">
      *Greist Attachments (no cover)
</div><!-- end right col -->
<div class="col-1">4</div><!-- end col -->
<div class="col-1">$3.00</div><!-- end col -->
<div class="col-2">&nbsp;</div><!-- RH col -->
</div><!-- end row -->

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
