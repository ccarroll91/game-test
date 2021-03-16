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