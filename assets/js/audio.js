/*---------------------------------------------------audio*/

document.getElementById('play1').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio1').play();
  });
  
  document.getElementById('play2').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio2').play();
  });
  
  document.getElementById('play3').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio3').play();
  });
  
  document.getElementById('play4').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio4').play();
  });
  
  document.getElementById('play5').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio5').play();
  });
  
  document.getElementById('play6').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio6').play();
  });
  
  document.getElementById('play7').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio7').play();
  });
  
  document.getElementById('play8').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio8').play();
  });
  
  document.getElementById('play9').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio9').play();
  });
  
  document.getElementById('play10').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio10').play();
  });
  
  document.getElementById('play11').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio11').play();
  });
  
  document.getElementById('play12').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio12').play();
  });
  
  document.getElementById('play13').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio13').play();
  });
  
  document.getElementById('play14').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio14').play();
  });
  
  document.getElementById('play15').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio15').play();
  });
  
  document.getElementById('play16').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio16').play();
  });
  
  document.getElementById('play17').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio17').play();
  });
  
  document.getElementById('play18').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio18').play();
  });
  
  document.getElementById('play19').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio19').play();
  });
  
  document.getElementById('play20').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio20').play();
  });
  
  document.getElementById('play21').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio21').play();
  });
  
  document.getElementById('play22').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio22').play();
  });
  
  document.getElementById('play23').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio23').play();
  });
  
  document.getElementById('play24').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio24').play();
  });
  
  document.getElementById('play25').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio25').play();
  });
  
  document.getElementById('play26').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio26').play();
  });
  
  document.getElementById('play27').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio27').play();
  });
  
  /*--------------------------------------------------audio stop--*/

  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }} 