---
title: Vintage sewing machines
linktitle: Machines
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, eco sewing"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual"
location: "South Eastern New South Wales, Southern Tablelands, Southern Highlands, Goulburn, New South Wales, Australia.  Custom clothing and costume.  Craft accesories "
navpos: 2

---

<div class="container mb-4">
<div class="row">
<div class="col-2">&nbsp;</div><!-- end col -->
<div class="col-3">
  <h2><a href="{{"id-01"}}">Identification</a></h2>
 </div><!-- end left col -->
<div class="col-5">
      <h3>Working out what you have</h3>
</div><!-- end right col -->
<div class="col-2">&nbsp;</div><!-- end col -->
</div><!-- end row -->
{% for item in site.data.machines %}
<div class="row">
<div class="col-2">&nbsp;</div><!-- end col -->
<div class="col-3">
<p class="h4">
{% if item.url %}
<a href="{{ item.url }}.html">{{ item.title }}</a>
{% else %}
{{ item.title }}
{% endif %}
</p>
 </div><!-- end left col -->
<div class="col-5">
<p class="h5">{{ item.description }}</p>
</div><!-- end right col -->
<div class="col-2">&nbsp;</div><!-- end col -->
</div><!-- end row -->
{% endfor %}
</div><!-- end container -->
