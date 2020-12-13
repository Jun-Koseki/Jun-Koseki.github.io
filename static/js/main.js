
// loadin animation
function loadingFunction() {
    let myVar = setTimeout(showPage, 1000)
}

function showPage() {
    document.getElementById("loader").style.display = "none"
    document.getElementById("content").style.display = "block"
}

// age counter
function counterFunc(){
  let timer = document.getElementById('timer')
  let birthDay = new Date(1994, 11, 25, 0, 0, 0)
  let birthdayNum = Number(birthDay)
  let elapsedTime = 0
  let timerId
  let timeToadd = 0
  countUp()

  function updateTimetoText(){
    let year = elapsedTime / 31339999999.9988899;
    let age = Math.floor( year * Math.pow( 10, 10 ) ) / Math.pow( 10, 10 )
    timer.textContent = age
  }

  function countUp(){
    let now = Date.now()
    timerId = setTimeout(function(){
      elapsedTime = Date.now() - birthdayNum
      updateTimetoText()
      countUp()
    },10)
  }
}

// smooth scroll
$(document).on('click', '.header .menu a', function(e){
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
})
