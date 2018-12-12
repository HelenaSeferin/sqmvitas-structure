(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("#mainNav").addClass("fixed-top");
        $("#mainNav").removeClass("bg-transparent");
    } else {
        $("#mainNav").removeClass("fixed-top");
    }
});



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

   

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function initSlider(){
    $('.menu-responsivo').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 12,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }


if ($(window).width() < 1080) {
    $('#myTab').addClass('menu-responsivo');
} 

var headerHeight = $('.header--page').height() + $('.header--view').height();

$('.content--main .col-scrollable').on('scroll', function(e){
  var scrollLeft = $(this).scrollLeft();
  var scrollTop = $(this).scrollTop();
  var getMarginTop = function( scrollTop ){
    if( scrollTop >= headerHeight){
      return headerHeight;
    }
    else{
      return scrollTop;
    }
  };
  
  var marginTop = getMarginTop( scrollTop );
  
  $('.header--table .col-scrollable').scrollLeft(scrollLeft);  
  $('.content--main .col-sticky').scrollTop(scrollTop);
  
  
  $('.header--page').css( {
    'margin-top' : -marginTop + 'px'
  });
  
  $(this).add('.content--main .col-sticky').css({
    'padding-top' : marginTop + 'px'
 });
  
});

$('.js-collapserows').on('click', function(){
  $('.wrapper--page .is-collapsible').toggleClass('is-collapsed');
})

$(document).ready(function () {
  var headerHeight = $('.header--page').height() + $('.header--view').height();

    $('.content--main .col-scrollable').on('scroll', function(e){
      var scrollLeft = $(this).scrollLeft();
      var scrollTop = $(this).scrollTop();
      var getMarginTop = function( scrollTop ){
        if( scrollTop >= headerHeight){
          return headerHeight;
        }
        else{
          return scrollTop;
        }
      };

    var marginTop = getMarginTop( scrollTop );
    
    $('.header--table .col-scrollable').scrollLeft(scrollLeft);  
    $('.content--main .col-sticky').scrollTop(scrollTop);
    
    
    $('.header--page').css( {
      'margin-top' : -marginTop + 'px'
    });

      /*$(this).add('.content--main .col-sticky').css({
        'padding-top' : marginTop + 'px'
     });*/
      
    });

    $('.js-collapserows').on('click', function(){
      $('.wrapper--page .is-collapsible').toggleClass('is-collapsed');
    });
  });


  $('#new-pem').click(function() {
    $('.new-pem').show();
    $('.search-pem').hide();
    $('.tables-hide').addClass('hide');
    $('.new-pem').removeClass('hide');
  });  

  $('.nav-item').click(function() {
    $('.new-pem').hide();
    $('.tables-hide').removeClass('hide');
  });


  $('#search-pem').click(function() {
    $('.search-pem').show();
    $('.new-pem').addClass('hide');
    $('.tables-hide').addClass('hide');
  });  

  $('.nav-item').click(function() {
    $('.new-pem').hide();
    $('.search-pem').hide();
    $('.tables-hide').removeClass('hide');
  });


