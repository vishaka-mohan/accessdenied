const tracks = document.querySelector("#tracks");
const faq = document.querySelector("#faq");
const itinerary = document.querySelector("#Itinerary");
const sponsors = document.querySelector("#sponsors");
const nav = document.querySelector("#nav");

const distance_top_tracks = tracks.offsetTop;
const distance_top_faq = faq.offsetTop;
const distance_top_itinerary = itinerary.offsetTop;
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
};
