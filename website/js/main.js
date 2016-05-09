$(document).ready(function () {
    var width = $(window).width()
    
    if (width < 767 ) {
        console.log("Small")
        $(".carouselText").addClass("clearMe")
        $(".navCustom").addClass("clearMe")
    } else {
        $(".hideText").addClass("clearMe")
        $(".hideText").addClass("clearMe")
        $(".hideText").addClass("clearMe")
        console.log("not small")
        $(".menu-link").addClass("clearMe")
    }

    $('.carousel').carousel({
        interval: 5000000000 //changes the speed
    })
    
    $('#myCarousel').on('slide.bs.carousel', function (e) {
        var f = $(".active", e.target).index()
        console.log(f)
        if ( f == 0 ) {
            $(".hide1").addClass("hideMe")
            $(".hide2").removeClass("hideMe")
        } else if ( f == 1 ) {
            $(".hide2").addClass("hideMe")
            $(".hide3").removeClass("hideMe")
        } else if ( f == 2 ) {
            $(".hide1").removeClass("hideMe")
            $(".hide3").addClass("hideMe")
        }
    })
    
    $(".menu-link").click(function(){
        $("#menu").toggleClass("active");
        $(".container").toggleClass("active");
    });

});