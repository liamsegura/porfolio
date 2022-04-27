document.querySelector('img').addEventListener('click', darkMode)

function darkMode(){
  let dark = document.querySelector('.dark')
  let darkButton = document.querySelector('.button')
  dark.classList.toggle('dark-mode')
  darkButton.classList.toggle('dark-mode-invert')
}
  var on = "assets/images/nav-dot-white.png"
  var off = "assets/images/nav-dot-black.png"
  var state = false;
  var img = document.getElementById("nav-dot");
  
  img.onclick = function(){
    if(state){
      img.src = off;
      state = false;
    }
    else{
      img.src = on;
      state = true;
    }
  }
document.querySelector('.buttonComingSoon').addEventListener('click', buttonText)

function buttonText(){
  document.querySelector('.buttonComingSoon').innerText = "Coming soon"
}