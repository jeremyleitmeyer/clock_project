var clock = document.getElementById("clock")
var bg = document.getElementById("bg-color")


function itsTime() {
  var time = new Date()
  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()
  
  if(hours <= 9) {
    hours = "0" + hours
  }
  
  if(minutes <= 9) {
    minutes = "0" + minutes
  }
  
  if(seconds <= 9) {
    seconds = "0" + seconds
  }
  
  var hex = `#${hours}${minutes}${seconds}`
  
  bg.style.backgroundColor = hex
  
  clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(itsTime, 1000)