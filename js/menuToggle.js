/* Toggler le menu */
$(document).ready(function(){
    $(`#menuToggle`).click(function(){
        $(`#mainNav`).stop(true, true).slideToggle();
    });
});

/* code en JS si clik sur a alors mainNav display none*/