
var header = null;
var carousel = null;
var slides = null;
var prevButton = null;
var nextButton = null;
var currentSlide = 0;

window.addEventListener("load", init)
function init () {

    header = document.querySelector('#header');

    carousel = document.querySelector('.about-us-carousel');
    slides = Array.from(document.querySelectorAll('.about-us-slide'));
    prevButton = document.querySelector('.carousel-button-prev');
    nextButton = document.querySelector('.carousel-button-next');

    window.addEventListener("scroll", scrollHandler);

    initLinksTopPosition();
}

function initLinksTopPosition () {

    let links = document.querySelectorAll('a[href^="#"]')

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault()

            var targetId = link.getAttribute('href')
            var target = document.querySelector(targetId)
            var menuHeight = header.offsetHeight

            if (target) {
                var targetPosition = target.offsetTop - menuHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' })
            }
        })
    })

}