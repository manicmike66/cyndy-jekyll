        var cart = [];// create new array var to hold products
        /*$(function () {*/
            if (localStorage.cart)// if the key (with the same name as the array) exists...
            {
                cart = JSON.parse(localStorage.cart);//populate the array. 
                showCart();// and show the existing cart items
            }
        /*});*/

        function checkExisting(thing) {// purpose is to change the button text
            document.getElementById("cartlink").style.visibility = "visible";
            for (var i in cart) {
                var product = cart[i];
                var btn = 'btnAdd-' + thing;// thing is the product code
                if (product.Product == thing){
                    document.getElementById(btn).innerHTML = "Added";
                }
                else {
                    document.getElementById(btn).innerHTML = "Add";
                }
            }
        }

        function addToCart(title) {// adding an item means...
            var name = document.getElementById(title).value;// don't know why I didn't just say name=title
            var priceId = 'price-' + title;// price IDs are price-title
            var qtyId = 'qty-' + title;// same with quantity
            var descId = 'desc-' + title;// same with description
            var price = document.getElementById(priceId).value;// set the value of price
            var qty = document.getElementById(qtyId).value;// set the quantity
            var desc = document.getElementById(descId).value;// set the description

            // update qty if product is already present
            for (var i in cart) {
                if(cart[i].Product == name)
                {
                    cart[i].Qty = qty;
                    showCart();// when finished, show the table
                    saveCart();// then update the values
                    return;
                }
            }
 
            // create JavaScript Object
            var item = { Product: name,  Price: price, Qty: qty, Desc: desc }; 
            cart.push(item);// push it onto the array as an object
            saveCart();
            showCart();
        }


        function deleteItem(index){
            cart.splice(index,1); // delete item at index
            saveCart();
            showCart();
        }

        function saveCart() {
            if ( window.localStorage)
            {
                localStorage.cart = JSON.stringify(cart);// convert object/s back to single JSON string and store to localStorage.cart
            }
        }

        function showCart() {
            if (cart.length == 0) {
                $("#cart").css("visibility", "hidden");
                $("#cart1").css("visibility", "hidden");
                return;
            }

            $("#cart").css("visibility", "hidden");// changed this
            $("#cart1").css("visibility", "visible");// changed this
            $("#cartBody").empty();
            for (var i in cart) {
                var item = cart[i];
                var itemtotal = item.Price * item.Qty;
                var row = '<tr><td>' + item.Product + item.Desc + '</td><td class="text-center">$' +
                             item.Price + '</td><td class="text-center">' + item.Qty + '</td><td class="text-center">$'
                             + itemtotal.toFixed(2) + "</td><td>"
                             + "<button onclick='deleteItem(" + i + ")'>Delete</button></td></tr>";
                $("#cartBody").append(row);
            }
        }
/* Validation functions for the form */
	function valEmail(x){
		var theEmail=document.getElementById(x).value;
	    var regexE = /^\S+@\S+$/;
	    //alert('email entered is ' + theEmail + ' regex is ' + regexE);
		if (! regexE.test(theEmail)) {
		    alert('Please enter a valid email address');
		    document.getElementById(x).value='';
		}
		return 1;
	}

	function valPhone(x){
		let theValue = document.getElementById(x).value;
	    var regex = /^\+?(?:[0-9] ?){8,14}[0-9]$/;
		if (regex.test(theValue)) {
		return ;
		}
		alert('You must enter a valid phone number');
		document.getElementById(x).value='';
	}
/* and some form processing functions */
const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to 
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // Define what happens in case of error
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // Set up our request
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // Finally, send our data.
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )
