// Start at 1
var slideIndex = 1;
showSlides(slideIndex);

// Moving left/right
// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Instant travel
// eslint-disable-next-line no-unused-vars
function setSlide(n) {
  showSlides((slideIndex = n));
}

// Function to change slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // To allow it to loop back around
  if (n > slides.length) {
    slideIndex = 1;
  }
  // and the other way
  if (n < 1) {
    slideIndex = slides.length;
  }
  // hide slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // disable dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slactive", "");
  }
  // show 'slideIndex' slide and dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slactive";
}
