let slideIndex = 0;
let slideTimer;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides (slideIndex = n)
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

function nextSlide(){
    showSlides();
    slideTimer = setTimeout(nextSlide, 3000); // Agendar o próximo slide
}

function setSlide(n){
    clearTimeout(slideTimer);
    slideIndex = n - 1;
    showSlides(slideIndex);
    slideTimer = setTimeout(nextSlide, 3000);
}

// Funções para navegação manual
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener('click', () => changeSlide(-1));
next.addEventListener('click', () => changeSlide(1));

function changeSlide(n) {
    clearTimeout(slideTimer);
    slideIndex += n - 1;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
    slideTimer = setTimeout(nextSlide, 3000);
}

nextSlide();