---
title: Cart
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"

---

<div class="container mb-4 text-center">
<h3>All fields are required</h3>
 <form action="https://getform.io/f/2cce0e3f-bf3a-4822-98f2-66a5af9d179d" method="POST">
<div class="form-group row my-4">
  <label class="sr-only" class="col-sm-2 col-form-label" for="name">Your name:</label><div class="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-10"><input aria-required="true" required="required" class="form-required form-control" type="text" id="name" name="name"></div>
</div><!-- end form group -->

<div class="form-group row my-4">
  <label class="sr-only" class="col-sm-2 col-form-label" for="email">Your email:</label>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-10"><input onChange="valEmail('email');" class="form-required form-control" aria-required="true" type="text" id="email" required="required" placeholder="email@example.com" name="email"></div>
</div><!-- end form group -->
<div class="form-group row my-4">
  <label class="sr-only" class="col-sm-2 col-form-label" for="contactnum">Your contact number:</label> <div class="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-10"><input onChange="valPhone('contactnum');" required="required" aria-required="true" class="form-required form-control" type="text" id="contactnum" name="contactnum"></div>
</div><!-- end form group -->
<div class="form-group row my-4">
  <label class="sr-only" class="col-sm-2 col-form-label" for="address">Your address:</label> <div class="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-10"><textarea rows="3" required="required" aria-required="true" class="form-required form-control" type="text" id="address" name="address"></textarea></div>
</div><!-- end form group -->
{% include order_summary.html %}
  <button class="btn btn-primary" id="submit" name="submit" type="submit" value="Send order">Send Order</button>
</form> 
</div><!-- end container -->

<script src="{{"assets/js/shop.js" | relative_url}}"/></script>
