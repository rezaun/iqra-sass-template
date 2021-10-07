$(document).ready(function(){
    //One Page Active
    $('#nav').onePageNav({
        currentClass: 'current'
    });
    //Image Popup Active
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    // slicknav
    $('#nav').slicknav();

    //Video Popup Active
    $('.video-popup').magnificPopup({
        type:'iframe'       
    });

    //Counter Active
    $('.counter-increment').counterUp();

    //TEstimonial Slider Active
    $('.testimonials').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        loop:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        responsive: [
            {
                breakpoint:1024,
                settings:{
                    arrows:false,
                },
            },
            {
                breakpoint:400,
                settings:{
                    arrows:false,
                }
            }
        ]
    });

    //Partner Slider Active
    $('.partner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false,
        arrows:false,
        loop:true,
        autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        // nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>'
    });

});
//Sticky Header Active
$(window).on('scroll',function(){
    if($(this).scrollTop() > 50){
        $('.header-area').addClass('sticky');
    } else {
        $('.header-area').removeClass('sticky');
    }
});