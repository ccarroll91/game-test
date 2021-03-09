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

var images = ["titleplaceholder.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png",
 "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "creditsplaceholder.png"]

var audio = ["audio2.mp3", "audio3.mp3", "audio4.mp3", "audio5.mp3", "audio6.mp3", "audio7.mp3", "audio8.mp3", "audio910.mp3", "audio11.mp3", 
"audio12.mp3", "audio13.mp3", "audio14.mp3", "audio15.mp3", "audio16.mp3", "audio17.mp3", "audio18.mp3", "audio19.mp3", "audio20.mp3", "audio21.mp3", 
"audio22.mp3", "audio23.mp3", "audio24.mp3", "audio25.mp3", "audio26.mp3", "audio27.mp3", "audio28.mp3", ]

var i = 0;

function nextItem() {
    i = i + 1; 
    i = i % images.length; 
    return images[i];
}

function prevItem() {
    if (i === 0) {
        i = images.length;
    }
    i = i - 1;  
    return images[i];
}


window.addEventListener('load', function () {
    document.getElementById('images').textContent = arr[0];
    document.getElementById('prev_button').addEventListener(
        'click', 
        function () { 
            document.getElementById('images').textContent = prevItem();
        }
    );
    
    document.getElementById('next_button').addEventListener(
        'click',
        function () { 
            document.getElementById('images').textContent = nextItem();
        }
    );
});
