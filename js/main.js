document.querySelector('img').addEventListener('click', darkMode)

function darkMode(){
  let dark = document.querySelector('.dark')
  dark.classList.toggle('dark-mode')
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