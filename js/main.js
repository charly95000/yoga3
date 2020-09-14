(function ($) {
	"use strict";

	$(window).on('scroll', function (){
		if ($(this).scrollTop()> 20){
			$('.navbar').removeClass("bg-transparent");
			$('.navbar-toggler').removeClass("bg-transparent");
			$('.navbar').addClass("shadow-sm");
			$('.navbar-toggler').addClass("shadows-sm");
		}
		else{
			$('.navbar').removeClass("shadow-sm");
			$('.navbar-toggler').removeClass("shadows-sm");
            $('.navbar').addClass("bg-transparent");
			$('.navbar-toggler').addClass("bg-transparent");
		}
	});
})(window.jQuery);