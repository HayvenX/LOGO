$(function() {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showAll').click(function() {
        $('.post').show(500);
    });
});

//  $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items: 8,
//         margin: 40,
        
//     });
//   });

  $('.owl-carousel').owlCarousel({
    items: 8,
    loop:true,
    margin:40,
    responsiveClass:true,
    responsive:{
        200:{
            items: 1

        },
        
        400:{
            items: 2
        },

        600:{
            items: 3
        },

        800:{
            items: 4
        },

        1000:{
            items: 5
        },

        1200:{
            items: 6
        },

        1400:{
            items: 7
        },

        1600:{
            items: 8
        }
    }
})