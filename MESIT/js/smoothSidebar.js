$().ready(function() {
    var $scrollingDiv = $("#sidebar");

    $(window).scroll(function(){            
        $scrollingDiv
            .stop()
            .animate({"marginTop": ($(window).scrollTop() + 21) + "px"}, "slow" );
    });
}); 