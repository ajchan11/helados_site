$(document).ready(function () {
    var width = $(window).width()
    
    if (width < 767 ) {
        console.log("Small")
        $(".navCustom").addClass("clearMe")
        $(".carouselText").addClass("clearMe")
        $(".desktopDrop").addClass("clearMe")
        $(".hide2").addClass("clearMe")
        $(".hide3").addClass("clearMe")
    } else {
        $(".hideText").addClass("clearMe")
        $(".hideText").addClass("clearMe")
        $(".hideText").addClass("clearMe")
        $(".mobileDrop").addClass("clearMe")
        console.log("not small")
        $(".menu-link").addClass("clearMe")
    }

    $('.carousel').carousel({
        interval: 3000 //changes the speed
    })
    
    $('#myCarousel').on('slide.bs.carousel', function (e) {
        var f = $(".active", e.target).index()
        console.log(f)
        if ( f == 0 ) {
            $(".hide1").addClass("hideMe")
            $(".hide2").removeClass("hideMe")
            if ( width < 767 ) {
                $(".hide1").addClass("clearMe")
                $(".hide2").removeClass("clearMe")
            }
        } else if ( f == 1 ) {
            $(".hide2").addClass("hideMe")
            $(".hide3").removeClass("hideMe")
            if ( width < 767 ) {
                $(".hide2").addClass("clearMe")
                $(".hide3").removeClass("clearMe")
            }
        } else if ( f == 2 ) {
            $(".hide1").removeClass("hideMe")
            $(".hide3").addClass("hideMe")
            if ( width < 767 ) {
                $(".hide1").removeClass("clearMe")
                $(".hide3").addClass("clearMe")
            }
        }
    })
    
    $(".menu-link").click(function(){
        $("#menu").toggleClass("active");
        $(".container").toggleClass("active");
    });

});