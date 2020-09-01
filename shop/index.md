---
title: Shop
layout: normal
description: "Cyndy Kitt Productions, treadle sewing machines, treadle sewing machine parts, sewing machine parts, vintage treadle sewing machines, reproduction sewing machine manuals, sewing machine manual, sewing, clothing, accessories, costume, bags, eco friendly, green machine, craft, treadle, design, eco sewing, sustainable craft"
keywords: "Bebarfald, White, Singer, Vickers, Pinnock, Gritzner, Pfaff, treadle sewing machine, vintage sewing machine, sewing machine manual, sewing"
bodyappend: onload="doShowAll()"

---

<div class="container mb-4">
<div class="row">
<form name="ShoppingList">
    <fieldset>
        <legend>Shopping cart</legend>
        <label>Item: <input type="text" name="name"></label>
        <label>Quantity: <input type="text" name="data" value="1"></label>

        <input type="button" value="Save"   onclick="SaveItem()">
        <input type="button" value="Update" onclick="ModifyItem()">
        <input type="button" value="Delete" onclick="RemoveItem()">
    </fieldset>
    <div id="items_table">
        <h2>Shopping List</h2>
        <table id="list"></table>
        <label><input type="button" value="Clear" onclick="ClearAll()">
        * Delete all items</label>
    </div>
</form>
</div><!-- end row -->
</div><!-- end container -->
<script src="{{ "assets/js/Storage.js" | relative_url }}"></script>
