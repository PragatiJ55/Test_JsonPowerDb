window.onscroll = function() {shrinkHeader()};
window.onload=function(){
  showSlides();
  showtestimony();
;}


let slideIndex = 0;
let testimonyIndex = 0;
function shrinkHeader() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("logo").style.height = "85px";
    document.getElementById("logo").style.width = "160px";
    document.getElementById("navbar").style.backgroundColor="white";
    document.getElementById("hr").style.display="block";
    document.getElementById("toll").style.top="-37px";
    document.getElementById("toll").style.marginTop="5%";
    document.getElementById("close").style.fontSize="125px";
    document.getElementById("close").style.top="-28px";
    document.getElementById("hamburgerC").style.top="16px";
    let height= document.getElementsByClassName("hamburger");
    let width= document.getElementsByClassName("hamburger");
    for(let i=0; i<height.length;i++)
    {
      height[i].style.height="6px";
      width[i].style.width="65px";
    }
  } else {
    document.getElementById("logo").style.height = "135px";
    document.getElementById("logo").style.width = "253px";
    document.getElementById("navbar").style.backgroundColor="transparent";
    document.getElementById("hr").style.display="none";
    document.getElementById("toll").style.top="-40px";
    document.getElementById("toll").style.marginTop="3%";
    document.getElementById("close").style.fontSize="135px";
    document.getElementById("close").style.top="-20px";
    document.getElementById("hamburgerC").style.top="25px"
    let height= document.getElementsByClassName("hamburger");
    let width= document.getElementsByClassName("hamburger");
    for(let i=0; i<height.length;i++)
    {
      height[i].style.height="8px";
      width[i].style.width="70px";
    }
  }
}


function showSlides() {
   let i;
  let slides = document.getElementsByClassName("image-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }   
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function showtestimony() {
  let i;
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
testimony[testimonyIndex-1].style.display = "block";  
dots[testimonyIndex-1].className += " activetestimony";
 setTimeout(showtestimony, 3000); 
}

function viewNAV(){
  document.getElementById("overlay-nav").style.width = "100%";
}
function closeNAV(){
  document.getElementById("overlay-nav").style.width = "0";
}
function active(navActive){
  let removeActive = document.getElementsByClassName("active");
  while (removeActive.length)
    removeActive[0].classList.remove("active");
    navActive.classList.add("active");
}