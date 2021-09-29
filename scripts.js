// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
    mobileFirst: true,
	  slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,    
    dots: false,
    infinite: true,
    speed: 5,
    variableWidth: true,
    cssEase: 'ease',
    appendArrows: $('.button')
  });

});







    // lazyLoad: 'ondemand',

/*

  $('#prev').click(function(){
    $(".slider").slick('slickNext');
  });

  $('#next').click(function(){
    $(".slider").slick('slickPrev');
  });
*/


/*responsive: [
     {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 
      }
    }
  ]
  */