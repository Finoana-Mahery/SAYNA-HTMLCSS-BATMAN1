let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("boit")[0].children;
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "flex";
}


/******************************** */


function check()
{

  var check=document.getElementsByClassName("gg-close")[0];
  if( check.style.visibility=="hidden")
  check.style.visibility="visible"; 
 

}
/******************************** */
const form=document.getElementsByClassName("forma");
const messg=document.getElementsByClassName("envoye");
console.log(messg);
function submit(){
  
  messg[0].style.display="block";
  form[0].style.display="none";
  
  

}
/******************************** */