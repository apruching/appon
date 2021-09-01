$(document).ready(function() {
    "used strict";

    var backToTop = $(".back-to-top");
    var Nav = $("nav");
    var htmlBody = $("html, body");

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }


        if (scrolling > 50) {
            Nav.addClass("nav-fix");
        } else {
            Nav.removeClass("nav-fix");
        }
    });

    backToTop.click(function() {
        htmlBody.animate({
            scrollTop: 0,
        }, 2000);
    });


    // banner-slider;
    $('.banner-slider').slick({
        arrows: true,
        dots: true,
        nextArrow: '<i class="fas fa-home home-btn"></i>',
        prevArrow: false,
        fade: true,
        speed: 2500,
        autoplay: true,
    });

    // screenshot-slider;
    $('.screenshot-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2500,
    });

    // video veno box;
    $('.venobox').venobox();


    // feedback-slider;
    $('.feedback-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2500,
        fade: true,
        asNavFor: '.feedback-img-slider',
    });

    // feedback-img-slider;
    $('.feedback-img-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2500,
        asNavFor: '.feedback-slider',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,

        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});