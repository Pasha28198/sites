$(document).ready(function () {
    $('.serv').click(function(){
    $('html, body').animate({
        scrollTop: $('.services').offset().top
    },500);
});

    $('.portf').click(function(){
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        },500);
    });

    $('.ab').click(function(){
        $('html, body').animate({
            scrollTop: $('.about_us').offset().top
        },500);
    });

    $('.cont').click(function(){
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        },500);
    });
});