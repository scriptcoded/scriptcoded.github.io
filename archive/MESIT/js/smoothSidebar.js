$().ready(function() {
    if ($(window).width() >= 960) {
        var $scrollingDiv = $("#sidebar");

        $(window).scroll(function(){            
            $scrollingDiv
                .stop()
                .animate({"marginTop": ($(window).scrollTop() + 21) + "px"}, "slow" );
        });
    }
}); 