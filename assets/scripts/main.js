$(document).ready(function() {
    $('.menu__toggle').click(function() {
        $(this).toggleClass('active')
        $('.menu__overlay').toggleClass('open');
    });
});