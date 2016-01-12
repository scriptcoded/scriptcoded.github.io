$(document).ready(function(){

	var $l = $('#logocnt a').first();
	var $lfx1 = $('<div id="logo-foreground"/>').appendTo($l);
	var $lfx2 = $('<div id="logo-colorizer"/>').appendTo($l);
	var lw = $l.width();
        /* rudely stolen from fail0verflow.com. Please don't send assassins <3 */
	$('html').bind('mousemove',function(e){
		var ml = e.pageX;
		var ll = $('#logocnt').offset().left;
		var l = ml-ll-(lw/2);
		$lfx2.css({ left: l });
	});

});