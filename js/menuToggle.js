/* Toggler le menu */
$(document).ready(function(){
    $('#menuToggle').click(function(){ /* #menuToggle par .barres*/
        $(`#mainNav`).stop(true, true).slideToggle();
    });
});

/* Animation menu croix*/

			$(document).ready(function(){
				$('.barres').click(function(){
					$('.barres').toggleClass('active');
				})
			})