var clock = document.getElementById("clock")

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
  
 
  var bg = document.getElementById("bg-color")
  
  bg.style.backgroundColor = hex
  
  hex = `${hours}:${minutes}:${seconds}`
  
  clock.innerHTML = hex
}

setInterval(itsTime, 1000)