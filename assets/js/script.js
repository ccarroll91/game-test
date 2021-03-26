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
    
 

    
  
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});
var i = 0, imgsrc = new Array(), preload = new Array();
imgsrc[0]="assets/images/titleplaceholder.png";
imgsrc[1]="assets/images/1.png";
imgsrc[2]="assets/images/2.png";
imgsrc[3]="assets/images/3.png";
imgsrc[4]="assets/images/4.png";
imgsrc[5]="assets/images/5.png";
imgsrc[6]="assets/images/6.png";
imgsrc[7]="assets/images/7.png";
imgsrc[8]="assets/images/8.png";
imgsrc[9]="assets/images/9.png";
imgsrc[0]="assets/images/10.png";
imgsrc[11]="assets/images/11.png";
imgsrc[12]="assets/images/12.png";
imgsrc[13]="assets/images/13.png";
imgsrc[14]="assets/images/14.png";
imgsrc[15]="assets/images/15.png";
imgsrc[16]="assets/images/16.png";
imgsrc[17]="assets/images/17.png";
imgsrc[18]="assets/images/18.png";
imgsrc[19]="assets/images/19.png";
imgsrc[20]="assets/images/20.png";
imgsrc[21]="assets/images/21.png";
imgsrc[22]="assets/images/22.png";
imgsrc[23]="assets/images/23.png";
imgsrc[24]="assets/images/24.png";
imgsrc[25]="assets/images/25.png";
imgsrc[26]="assets/images/creditsplaceholder.png"

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
setTimeout("startSlideshow()",1000);
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
document.getElementById("myCarousel").src=imgsrc[0];
i=0;
}
if(i==imgsrc.length)
{
i=0;
}
}


