$(document).ready(function(){
"use strict";
	$(".pull-left .navbar-toggle").click(function(){
		$(".section > .container > .row-offcanvas-left").toggleClass("active");
	})
});