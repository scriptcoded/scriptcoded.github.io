$(document).ready(function() {
  $(".content").css("min-height", "calc(100vh - " + $('header').height() + "px - " + $('.menu').height() + "px)");
  //$(".content").css("min-height", $('header').height());
});