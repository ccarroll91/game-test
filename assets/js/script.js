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


/*---------------------------------------------------audio*/

setTimeout(function(){
    document.getElementById("audio2").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio3").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio4").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio5").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio6").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio7").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio2").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio8").play();
    console.log("play audio file");
})
setTimeout(function(){
    document.getElementById("audio9").play();
    console.log("play audio file");
})



const narBtn = document.querySelectorAll(".play-nar");
let myAudio1 = document.querySelector('#audio1');
narBtn.addEventListener('click',()=>{
    myAudio1.play();
});


