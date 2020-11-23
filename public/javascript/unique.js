let k = 0;
let txt = 'We customize furnitures according to your requirement';
let speed = 50;
window.addEventListener("load", typeWriter);

function typeWriter() {
  if (k < txt.length) {
    document.getElementById("textUnique").innerText += txt.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  }
}