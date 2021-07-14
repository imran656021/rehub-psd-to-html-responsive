var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
})

// ==========owl cursol part================

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        stagePadding: 50,
        dots: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-nxt').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.owl-prv').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    // ==========sticky menu
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 400) {
            $('#nav-bar').addClass('sticky');
        } else {
            $('#nav-bar').removeClass('sticky');
        }
    });


})