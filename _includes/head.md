<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">
    <title>Cyndy Kitt Productions - {{page.title}}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="{{page.description}}">
<meta name="keywords" content="{{page.keywords}}">
<script language="JavaScript">
<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
//-->
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="shortcut icon" href="{{ "favicon.ico"|relative_url }}" type="image/x-icon">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script language="JavaScript" src="{{ "assets/js/toolbar.js" | relative_url }}"></script>
<script language="JavaScript" src="{{ "assets/js/menu1.js" | relative_url }}"></script>
<link rel="stylesheet" href="{{"assets/css/toolbar.css" | relative_url}}" type="text/css">
<link rel="stylesheet" href="{{"assets/css/style.css" | relative_url}}" type="text/css">
{% if page.dir contains "shop" %}
<link rel="stylesheet" href="{{"assets/css/StorageStyle.css" | relative_url}}" type="text/css">
{% endif %}
{% if page.title == "bone couture" %}
<link rel="stylesheet" href="{{"assets/css/bone.css" | relative_url}}" type="text/css">
{% endif %}
    </head>

