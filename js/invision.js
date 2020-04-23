/* *********************

Invision Zappts test
Created with love by Natan (natanmiranda@yahoo.com.br)

********************* */

(function($) {
  
  	"use strict";

  	/*----- Custom events on ready ----- */
    $('document').ready(function() { 

		// slider init
		$('.invision-slider').slick({
		  dots: true,
		  arrows: false,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
		});

	}); /* End on ready */

}(jQuery)); /* End strict */