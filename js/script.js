$(document).ready(function () {
    $('.burger').click(function () { 
        if ($('navbar').hasClass('nav-visible')) {
            $('navbar').addClass('nav-hidden');
            $('navbar').removeClass('nav-visible')
        } else {
            $('navbar').addClass('nav-visible');
            $('navbar').removeClass('nav-hidden');
        }
        
    });
});