function fade() {
    $('.loadingScreen').fadeOut("slow");
    }
    setTimeout(fade, 2000);

$('#hamburgermenu').on("click", function(){
    $(".mobilenavigation").slideToggle();
    $(".openMenu").toggle();
    $(".closeMenu").toggle();
});

// ALTERNATE CARD HOVER (PAIRED WITH CSS)
// $('.casestudyCard').hover(function(){
//     $(this).css("background-size", "110%");
//     $(this).find('.cardHover').css("height", "100%");
//     if($(this).has("p")){
//         $(this).find("p").css("display", "inline").animate({opacity:1});
//     } else{
//         $(this).find("p").css("display", "none");
//     }}, function() {
//         $(this).find('.cardHover').css("height", "15%");
//         if ($(this).has("p") || $(this).find("p").css("opacity") == "1") {
//             $(this).find("p").css("display", "none");
//         } else {$(this).find("p").css("display", "none");}
//         $(this).css("background-size", "100%");
//     });

// var w = screen.width;
// if (screen.width < 500){
//     $(".casestudyCard").css("width", w);
// } else {};


// $("body").ready(function(){
//     $('.mainArea').css('opacity',0)
//         .slideDown(500)
//         .animate({opacity:1},500);
//     $('#mediumCards').css('opacity',0)
//         .slideDown('slow')
//         .animate({opacity:1},500);
// })


// $('#mediumCards').ready(function(){
//     $('.mediumCardstyle').css('display', 'none');
//     $('.mediumCardstyle').fadeIn(1000);
// });

// $('#casestudies').ready(function(){
//     $('.casestudyCard').css('display', 'none');
//     $('.casestudyCard').fadeIn(500);
// });

// $(window).on('load', function(){
//     $('#loadingScreen').fadeIn('5000');
//     $('#loadingScreen').('5000');
//     $('#loadingScreen').fadeOut('5000');
// });

// $(window).on('load', function(){
//     setTimeout(function(){
//         $('#loadingScreen').fadeIn('5000');
//     }, 6000);
//     $('#loadingScreen').fadeOut('5000');
// });

// $(document).ready(function(){
//     $(document).fadeIn(5000);
// });