$(document).ready(function() {
    // Toggle Menu
    $('.menu__toggle').click(function() {
        $(this).toggleClass('active')
        $('.menu__overlay').toggleClass('open');
    });
    //Slick Slider
    $('.hero__slider').slick({
        draggable: true,
        arrows: true,
        dots: true
    });
});
