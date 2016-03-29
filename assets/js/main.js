$(document).ready(function(){

  // Define Window & Slide Heights to top
  $window = $(window);
  var homeSlide = $('#slide-1').offset().top;
  var slideOne = $('#img-parallax-2').offset().top;
  var slideTwo = $('#slide-2').offset().top;
  var slideThree = $('#img-parallax-3').offset().top;
  var slideFour = $('#contactme').offset().top;

  // Scroll to Slide Animation
  function scrollTo(id){
    $('html,body').animate({scrollTop: $(id).offset().top},'medium');
  }
  // ANIMATE SCROLL DOT 0 (Home)
  $("#dot0").click(function(){
    scrollTo("#slide-1");
  });
  // ANIMATE SCROLL DOT 1
  $("#dot1").click(function(){
    scrollTo("#img-parallax-2");
  });
  // ANIMATE SCROLL DOT 2
  $("#dot2").click(function(){
    scrollTo("#slide-2");
  });
  // ANIMATE SCROLL DOT 3
  $("#dot3").click(function(){
    scrollTo("#img-parallax-3");
  });
  // ANIMATE SCROLL DOT 4
  $("#dot4").click(function(){
    scrollTo("#contactme");
  });

  // Change the dots color when on slide
  $window.scroll(function() {
    // For dot 0
    if ($window.scrollTop() > (homeSlide - 25) && $window.scrollTop() < (slideOne -25) ) {
      $("#dot0").addClass("dotactive");
    }
    else {
      $("#dot0").removeClass("dotactive");
    }
    // For dot 1
    if ($window.scrollTop() > (slideOne - 25) && $window.scrollTop() < (slideTwo -25)) {
      $("#dot1").addClass("dotactive");
    }
    else {
      $("#dot1").removeClass("dotactive");
    }
    // For dot 2
    if ($window.scrollTop() > (slideTwo - 25) && $window.scrollTop() < (slideThree -25)) {
      $("#dot2").addClass("dotactive");
    }
    else {
      $("#dot2").removeClass("dotactive");
    }
    // For dot 3
    if ($window.scrollTop() > (slideThree - 25) && $window.scrollTop() < (slideFour -25)) {
      $("#dot3").addClass("dotactive");
    }
    else {
      $("#dot3").removeClass("dotactive");
    }
    // For dot 4
    if ($window.scrollTop() > slideFour - 25) {
      $("#dot4").addClass("dotactive");
      $("#dot3").removeClass("dotactive");
    }
    else {
      $("#dot4").removeClass("dotactive");
    }
  });

  // Join & Login Buttons on Hero Text
    $('#join-btn').click(function(){
      window.location = "https://www.eventbrite.com/e/make-your-own-vr-user-interface-2-day-event-tickets-24060041231";
    });

    $('#signup-btn').click(function(){
      scrollTo('#contactme');
    });

  // PARALAX CODE STUFFS
    $('section[data-type="background"]').each(function(){
      // Only do parallax if screen width is more than 699px
      var ScreenWidth = screen.width;
      if (ScreenWidth > 699 ){
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // Put together our final background position
        var coords = '55% '+ yPos + 'px';
        // Move the background
        $bgobj.css({ backgroundPosition: coords });
      });
    }
    else{
      // uhm then don't do it
    }
  });

  // Google Maps
  var map;
  function initMap() {
    var mapOptions = {
      center: {lat: 34.1815775, lng: -118.3097096},
      zoom: 16,
      disableDefaultUI: true,
      scroll:{x:$(window).scrollLeft(),y:$(window).scrollTop()}
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Paralax Google Map
    var offset=$(map.getDiv()).offset();
    map.panBy(((mapOptions.scroll.x-offset.left)/3),((mapOptions.scroll.y-offset.top)/3));

    google.maps.event.addDomListener(window, 'scroll', function(){
      var scrollY=$(window).scrollTop(),
      scrollX=$(window).scrollLeft(),
      scroll=map.get('scroll');
      if(scroll){
        map.panBy(-((scroll.x-scrollX)/3),-((scroll.y-scrollY)/3));
      }
      map.set('scroll',{x:scrollX,y:scrollY})
    });
    // google.maps.event.addDomListener(window, 'load', initialize);
  }
  initMap();

});
