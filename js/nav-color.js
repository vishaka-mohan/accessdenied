/*const tracks = document.querySelector("#tracks");
const faq = document.querySelector("#faq");
const itinerary = document.querySelector("#Itinerary");
const sponsors = document.querySelector("#sponsors");
const nav = document.querySelector("#nav");
const speakers = document.querySelector("#speakers");
const prizes = document.querySelector("#prizes");


const distance_top_tracks = tracks.offsetTop;
const distance_top_faq = faq.offsetTop;
const distance_top_itinerary = itinerary.offsetTop;
const distance_top_speakers = speakers.offsetTop;
const distance_top_prizes = prizes.offsetTop;
const distance_top_nav = sponsors.offsetTop;

window.onscroll = () => {
    if (
        tracks.offsetTop - 50 < window.pageYOffset &&
        window.pageYOffset < 4180
    ) {
        nav.children[1].firstChild.classList.remove("reached");
        nav.children[2].firstChild.classList.remove("reached");
        nav.children[3].firstChild.classList.remove("reached");
        nav.children[0].firstChild.classList.add("reached");
    } else if (window.pageYOffset === 4119) {
        console.log("reached");
        nav.children[0].firstChild.classList.remove("reached");
        nav.children[1].firstChild.classList.add("reached");
        nav.children[2].firstChild.classList.remove("reached");
        nav.children[3].firstChild.classList.remove("reached");
    } else if (
        itinerary.offsetTop - 60 < window.pageYOffset &&
        window.pageYOffset < 5031.2001953125
    ) {
        nav.children[0].firstChild.classList.remove("reached");
        nav.children[1].firstChild.classList.remove("reached");
        nav.children[2].firstChild.classList.add("reached");
        nav.children[3].firstChild.classList.remove("reached");
    } else if (
        sponsors.offsetTop - 50 < window.pageYOffset &&
        window.pageYOffset < 7869.60009765625
    ) {
        nav.children[0].firstChild.classList.remove("reached");
        nav.children[1].firstChild.classList.remove("reached");
        nav.children[2].firstChild.classList.remove("reached");
        nav.children[3].firstChild.classList.add("reached");
    } else {
        nav.children[0].firstChild.classList.remove("reached");
        nav.children[1].firstChild.classList.remove("reached");
        nav.children[2].firstChild.classList.remove("reached");
        nav.children[3].firstChild.classList.remove("reached");
    }
};*/


var top1 = $('#tracks').offset().top;
var top2 = $('#Itinerary').offset().top;
var top3 = $('#speakers').offset().top;
var top4 = $('#prizes').offset().top;
var top5 = $('#sponsors').offset().top;
var top6 = $('#faq').offset().top;
var top7 = $('#codeofconduct').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#top1').css('color', '#DF42B1');
    $('#top2').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top5').css('color', '#fff');
    $('#top6').css('color', '#fff');
    

  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#top2').css('color', '#DF42B1');
    $('#top1').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top5').css('color', '#fff');
    $('#top6').css('color', '#fff');


  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('#top3').css('color', '#DF42B1');
    $('#top2').css('color', '#fff');
    $('#top1').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top5').css('color', '#fff');
    $('#top6').css('color', '#fff');


  } else if (scrollPos >= top4 && scrollPos < top5) {
    $('#top4').css('color', '#DF42B1');
    $('#top2').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top5').css('color', '#fff');
    $('#top1').css('color', '#fff');
    $('#top6').css('color', '#fff');
  

  }else if (scrollPos >= top5 && scrollPos < top6) {
    $('#top5').css('color', '#DF42B1');
    $('#top2').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top1').css('color', '#fff');
    $('#top6').css('color', '#fff');

  }else if (scrollPos >= top6 && scrollPos < top7) {
    $('#top6').css('color', '#DF42B1');
    $('#top2').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top1').css('color', '#fff');
    $('#top5').css('color', '#fff');


  }else{
    $('#top1').css('color', '#fff');
    $('#top2').css('color', '#fff');
    $('#top3').css('color', '#fff');
    $('#top4').css('color', '#fff');
    $('#top5').css('color', '#fff');
    $('#top6').css('color', '#fff');
   
  }
});
