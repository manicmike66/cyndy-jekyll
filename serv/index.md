---
title: Servicing Tutorials
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"

---

  <div class="container">
{% for item in site.data.serv %}
<div class="row my-4">
<div class="col-1">&nbsp; </div><!-- end col -->
<div class="col-2 vertical-center"><span class="align-middle">
{% if item.pic %}
<img class="img-fluid" src="pic/{{item.pic}}">
{% else %}
Picture {{item.picture}}
{% endif %}
</span></div><!-- end col -->
<div class="col-7 vertical-center">
<span class="align-middle">
<a href="{{item.url}}.html">{{item.title}}</a>
</span>
</div><!-- end col -->
<div class="col-2">&nbsp;</div><!-- end col -->
</div><!-- end row -->
{% endfor %}
</div><!-- end of container -->
