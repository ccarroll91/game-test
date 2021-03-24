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

setInterval(() => {
     $("#myCarousel").carousel("next");
    // Write code to play audio
  }, 3000);


$('#myCarousel').on('slid.bs.carousel', checkitem);

$(document).ready(function(){
    checkitem();
});

function checkitem()
{
var $this = $('#myCarousel');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').secret();
    } else if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.right.carousel-control').hide();
        $this.children('.left.carousel-control').secret();
    } else {
        $this.children('.carousel-control').secret();
    }
}

var elem = document.getElementById("myCarousel");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

document.querySelector('#about-button').addEventListener('click', toggle)

function toggle(event) {
    if (document.getElementById('about').style.display == 'none') {
    event.target.innerText = 
    `About`
    document.getElementById('about').style.display = ''
  } else {
    event.target.innerText = 'About'
    document.getElementById('about').style.display = 'none'
  }
}


let secret = document.querySelector(".secret");
secret.ontransitionrun = function(event) {
  secret.textContent = "Christmas at Gran's was written by Michael Brennan at the age of 10, and adapted into this digital story by Conor Carroll. It is with deep regret that Conor discovered that Bonzo did not, in fact, exist and was a figment of Brennan's imagination for the poem. As Michael's brother Tom put it, 'he took a bit of creative licence there'. We hope that you still love him.";
}
secret.ontransitionend = function(event) {
  secret.textContent = "Want to know a secret?";
}