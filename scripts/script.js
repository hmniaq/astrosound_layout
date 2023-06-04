$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10,
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
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