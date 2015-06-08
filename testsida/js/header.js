$(function() {
    // Stick the #nav to the top of the window
    var nav = $('.menu');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
			$("#logoSmall")
			.css("margin-left",-$("#logoSmall").width()-3)
			.animate({
				marginLeft:0
			}, 250);
			$('.content').css({
				top: '40px'
			});
			/*$('#logoSmall').css({
				display: 'inline'
			});*/
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
			$('.content').css({
				top: '0px'
			});
			$("#logoSmall")
			.css("margin-left",0)
			.animate({
				marginLeft:-$("#logoSmall").width()-3
			}, 250);
			/*$('#logoSmall').css({
				display: 'none'
			});*/
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
