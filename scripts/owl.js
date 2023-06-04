// Настройка слайдера Owl Carousel 
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false, 
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000, 
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});