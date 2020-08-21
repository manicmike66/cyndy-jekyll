<style>
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  color:#8b583d;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width:100%;
/*  line-height:2rem;*/
  top:28px;
  list-style: none;
  text-align:center;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #8b583d;
  padding: 2px 6px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #8b583d;
    color: #fff;
}
#Toolbar ul { 
    list-style: none; 
    float: left; 
    padding:0;
}
#Toolbar ul li{ 
    font-size:small;
    border: 1px solid #8b583d;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
    }

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #001e36;}
</style>
<script>
$(document).ready(function(){
    $("#toggleLink").unbind().click(function() {
        var showList = $("#toggleLink").hasClass("show-nav-link");
        if (showList) {
            $("#sub-menu").show();
            $("#toggleLink").removeClass("show-nav-link");
            $("#toggleLink").addClass("hide-nav-link");
            $("#toggleLink").html("Hide section navigation<span class=\"fa fa-angle-up\">&nbsp;</span>");
        } else {
            $("#sub-menu").hide();
            $("#toggleLink").removeClass("hide-nav-link");
            $("#toggleLink").addClass("show-nav-link");
            $("#toggleLink").html("Show section navigation<span class=\"fa fa-angle-down\">&nbsp;</span>");
        }
    });
});
</script>
<nav id="Toolbar"  class="tbToolbar navbar navbar-expand-md" role="navigation"><!-- class="collapse navbar-collapse">-->
    <ul class="navbar-nav mx-auto"><!-- nav navbar-nav">-->
        {% assign navstyle = 'border border-white mx-2' %}
        {% assign links = site.data.navigation %}
        {% for link in links %}
                {% assign class = nav-item %}
                {% if page.url == link.url %}
                    {% assign class = 'nav-item active' %}
                {% endif %}
                {% if link.sublinks %}
                    <li id="{{link.title}}-menu" id="{{ class }}" class="{{ navstyle }} dropdown {{ class }} tbItem">
                        <a href="{{ link.url }}" class="nav-link tbItemLink dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ link.title }} <span class="caret"></span></a>
                        <ul class="dropdown-content">
                            {% for sublink in link.sublinks %}
                                {% if sublink.title == 'separator' %}
                                    <li role="separator" class="sub-nav-group divider"></li>
                                {% else %}
                                    <li>
                                        <a href="{{ sublink.url }}">{{ sublink.title }}</a>
                                    </li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    </li>
                {% else %}
                    <li id="{{ class }}" class="{{ class }} tbItem">
                        <a class="nav-link tbItemLink" href="{{ link.url }}">{{ link.title }}</a>
                    </li>
                {% endif %}
        {% endfor %}
    </ul>
</nav>

