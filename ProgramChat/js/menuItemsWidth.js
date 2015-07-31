$(document).ready(function() {
	scale();
});

$( window ).resize(function() {
  scale();
});

function scale() {
	$(".menu li").css("width", $('.content').width() / ($(".menu li").length - $(".menu li ul li").length) + "px");
	//$(".menu li").css("width", 100 / ($(".menu li").length - $(".menu li ul li").length) + "%");
	$(".menu-item a").css("width", $(".menu li").width());
}