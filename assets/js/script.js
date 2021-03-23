function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
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
    function playClip(){
    if($('.item').eq(1).hasClass('active')){
         $(this).next().get(0).play();
    }
}
  }, 3200);

  window.setInterval(playClip,3200);

$('#myCarousel').on('slid.bs.carousel', checkitem);

$(document).ready(function(){
    checkitem();
});

function checkitem()
{
var $this = $('#myCarousel');
    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').show();
    } else if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.right.carousel-control').hide();
        $this.children('.left.carousel-control').show();
    } else {
        $this.children('.carousel-control').show();
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