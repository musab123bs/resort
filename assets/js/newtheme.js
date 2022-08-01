
$(window).on('load', function () {
  // Page Loader
  setTimeout(function () {
    $(".overlay, body").addClass("loaded");
  }, 1000);

  // Will remove overlay after 1min for users cannot load properly.
  setTimeout(function () {
    $(".overlay").css({ display: "none" });
  }, 2000);
});
  
  
  
  $(document).ready(function () {
  $('.video_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand',
    speed: 2000,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/images/left-arrow.svg" alt="left arrow"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/images/right-arrow.svg" alt="right arrow"/></button>',
  }).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

  $(document).ready(function () {
    $("header .navbar .navbar-nav li a.nav-link").click(function () {
        $(".cross span").click();
    });
});


$(".hamburger").click(function () {
  $(this).addClass("open");
  $(".navbar-collapse").addClass("show");
});
$(".cross").click(function () {
  $(".hamburger").removeClass("open");
  $(".navbar-collapse").removeClass("show");
});



