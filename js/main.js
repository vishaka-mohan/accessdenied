const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 2,19).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 2, 19).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  days = (days < 10) ? "0"+days : days;
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours = (hours < 10) ? "0"+hours : hours;
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  minutes = (minutes < 10) ? "0"+minutes : minutes;
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  seconds = (seconds < 10) ? "0"+seconds : seconds;

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);
(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });



    /* ==========================================================================
    countdown timer
    ========================================================================== */
     jQuery('#clock').countdown('2021/10/19',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });


    // one page navigation 
    $('.onepage-nev').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));