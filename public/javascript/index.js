window.onload = function () {
    showSlides();
    showtestimony();
  }
  
  let i;
  let slideIndex = 0;
  let testimonyIndex = 0;

  function showSlides() {

    let slides = document.getElementsByClassName("image-slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  
  function showtestimony() {
    let testimony = document.getElementsByClassName("testimony");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < testimony.length; i++) {
      testimony[i].style.display = "none";
    }
    testimonyIndex++;
    if (testimonyIndex > testimony.length) {
      testimonyIndex = 1;
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activetestimony", "");
    }
    testimony[testimonyIndex - 1].style.display = "block";
    dots[testimonyIndex - 1].className += " activetestimony";
    setTimeout(showtestimony, 3000);
  }
  