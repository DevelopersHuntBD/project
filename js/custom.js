$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.navbar').addClass('bg');
        }else{
            $('.navbar').removeClass('bg');
        }
    });

    // SmothScrolling.....
    $('.navbar a').on('click', function(event){
        if(this.hash !== ''){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        }
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filtering').on( 'click', 'p', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // Back to Top 
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 500){
            $(".back-to-top").fadeIn(500);
        }else{
            $(".back-to-top").fadeOut(500);
        }
    });

    $(".back-to-top").click(function(){
        $("html,body").animate({
            scrollTop:0
        }, 1000)
    });


});




$(document).ready(function(){

    $('.single-video').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
           
            1000:{
                items:4
            }
        }
    });

    $('.event-slide').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


});