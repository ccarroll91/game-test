$(document).ready(function(){
 

  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
        
  $("#myCarousel").carousel({wrap: false});

  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

console.log("myCarousel")

$('#myCarousel').on('slid', '', checkitem);
$('#myCarousel').on('slid.bs.carousel', '', checkitem);

$(document).ready(function(){
    checkitem();
});


/*---------------------------------------------------------------------about----*/

document.querySelector('#about-button').addEventListener('click', toggle)

function toggle(event) {
    if (document.getElementById('about').style.display == 'none') {
    event.target.innerText = 'About'
    document.getElementById('about').style.display = ''
  } else {
    event.target.innerText = 'About'
    document.getElementById('about').style.display = 'none'
  }
}

/*--------------------------------------------------Fullscreen--*/

var elem = document.getElementById("myCarousel");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

/*---------------------------------------------------Slide Functions*/

var audio1 = $('#audio-1');
var audio2 = $('#audio-2');
var audio3 = $('#audio-3');
var audio4 = $('#audio-4');
var audio5 = $('#audio-5');
var audio6 = $('#audio-6');
var audio7 = $('#audio-7');
var audio8 = $('#audio-8');
var audio9 = $('#audio-9');
var audio10 = $('#audio-10');
var audio11 = $('#audio-11');
var audio12 = $('#audio-12');
var audio13 = $('#audio-13');
var audio14 = $('#audio-14');
var audio15 = $('#audio-15');
var audio16 = $('#audio-16');
var audio17 = $('#audio-17');
var audio18 = $('#audio-18');
var audio19 = $('#audio-19');
var audio20 = $('#audio-20');
var audio21 = $('#audio-21');
var audio22 = $('#audio-22');
var audio23 = $('#audio-23');
var audio24 = $('#audio-24');
var audio25 = $('#audio-25');
var audio26 = $('#audio-26');

varaudioArray =[audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15, audio16, audio17, audio18, audio19, audio20, audio21, audio22, audio23, audio24, audio25, audio26]
var i=0
var lastPlayedFile = null;
$(".click").click(function(){
  if(lastPlayedFile !== null) {
     lastPlayedFile[0].currentTime = 0;
     lastPlayedFile.trigger('pause'); 
  }
  if (i< audioArray.length){
     lastPlayedFile = audioArray[i];
     audioArray[i].trigger('play');
     i++;
  } else if (i>=audioArray.length){
     i = 0;
     lastPlayedFile = audioArray[0];
     audioArray[i].trigger('play');
  };
});

