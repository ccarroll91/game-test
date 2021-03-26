function myFunction() {
  document.getElementById("myDropdown").classList.toggle("secret");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('secret')) {
        openDropdown.classList.remove('secret');
      }
    }
  }
}

$(document).ready(function(){
 
  $("#myCarousel").carousel({wrap: false});
    
 

    
  
  


var imgsrc = new Array();
imgsrc[0]="assets/images/titleplaceholder.png";
imgsrc[1]="assets/images/1.png, assets/audio/audio2.mp3";
imgsrc[2]="assets/images/2.png";
imgsrc[3]="assets/images/3.png";
imgsrc[4]="assets/images/4.png";
imgsrc[5]="assets/images/5.png";

for (var j=0;j<imgsrc.length;j++)
{
preload[j] = new Image;
preload[j].src = imgsrc[j];
}
function mode(param)
{
smode=param;
}
function startSlideshow()
{
if(smode=="play")
{
document.getElementById("play").disabled="disabled";
document.getElementById("pause").disabled="";
document.getElementById("stop").disabled="";
document.getElementById("slideshow").src=imgsrc[i];
i++;
setTimeout("startSlideshow()",3000);
}
else if(smode=="pause")
{
document.getElementById("pause").disabled="disabled";
document.getElementById("play").disabled="";
document.getElementById("play").value="Resume";
}
else if(smode=="stop")
{
document.getElementById("play").disabled="";
document.getElementById("play").value="Play";
document.getElementById("pause").disabled="disabled";
document.getElementById("stop").disabled="disabled";
document.getElementById("slideshow").src=imgsrc[0];
i=0;
}
if(i==imgsrc.length)
{
i=0;
}
}

$(".left").click(function(){
    $("#slideshow").slide("prev");
  });
  $(".right").click(function(){
    $("#slideshow").slide("next");
  });
});