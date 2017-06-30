/** import external dependencies */

$(document).ready(function() {
    $('.menu__toggle').click(function() {
        $(this).toggleClass('active')
        $('.menu__overlay').toggleClass('open');
    });
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
