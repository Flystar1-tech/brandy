$(document).ready(function() {
    // Activate Carousel
    $("#lessons-carousel").carousel();

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#lessons-carousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#lessons-carousel").carousel("next");
    });
});


