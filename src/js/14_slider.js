const headerWrapper = document.getElementById('header-wrapper');
const headerSliderPhotos = ['url("img/header/slider_1.jpg")', 'url("img/header/slider_2.jpg")', 'url("img/header/slider_3.jpg")'];
let slideIndex = 1;
showSlides(slideIndex);


function showSlides(index) {
    const slides = document.getElementsByClassName("slider-item");
    if (index > slides.length) {
        slideIndex = 1
    }
    if (index < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    headerWrapper.style.backgroundImage = headerSliderPhotos[slideIndex - 1];
}

const prevArrow = document.getElementById('header-slider-arrow-prev');
const nextArrow = document.getElementById('header-slider-arrow-next');

prevArrow.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
});

nextArrow.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});


