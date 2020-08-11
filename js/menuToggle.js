/* Toggler le menu */
$(document).ready(function(){
    $('#menuToggle').click(function(){ /* #menuToggle par .barres*/
        $(`#mainNav`).stop(true, true).slideToggle();
    });
});

/* Animation menu croix*/

			$(document).ready(function(){
				$('#menuToggle').click(function(){
					$('#menuToggle').toggleClass('active');
				})
			})

/* Disparition Défilement text */ 
$(function(){
	const doc = $(document);
	const elementsDisparition = $('.effet');

	doc.on('scroll', function(){
		// Position top
		let posActuelle = doc.scrollTop();
		console.log(posActuelle);

		elementsDisparition.each(function(){
			// Position de chaque elements par rapport au top
			let decalageTop = $(this).offset().top;
			console.log("Decal" + decalageTop);

			if (posActuelle > decalageTop) {
				$(this).css('opacity', 1 - (posActuelle - decalageTop) / 75)
			}
		})


	})
})