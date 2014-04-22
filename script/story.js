$(document).ready(function(){
//    GLOBALS
    var WINDOW_HEIGHT = $(window).height();
    var WINDOW_WIDTH = $(window).width();

    var $nav = $('nav.normal');

    $(window).scroll(scrollUpate);
    $(window).resize(setDimensions);


//    set dimensions
    function setDimensions(){
        WINDOW_HEIGHT = $(window).height();
        WINDOW_WIDTH = $(window).width();
    }

//    scrollAnimations
    var scrollTop = $(this).scrollTop();

    function scrollUpate(){
        scrollTop = $(this).scrollTop();
        fixedNav();
//        console.log("scrollTop:" + scrollTop);
    }

//    fixed nav menu
    function fixedNav(){
        if ( scrollTop < WINDOW_HEIGHT - 100 ){
            $nav.removeClass('fixed').addClass('normal');
        }
        else{
            $nav.removeClass('normal').addClass('fixed');
        }
    }
});