let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
function modalBox(img){
 modal.style.display = "block";
 modalImg.src = img.src;
}
let span = document.getElementsByClassName("closeTheme")[0];

span.onclick = function() { 
 modal.style.display = "none";
}