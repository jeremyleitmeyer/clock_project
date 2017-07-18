var clock = document.getElementById("clock")
var bg = document.getElementById("bg-color")

function newNum(num) {
  return num < 10 ? "0"+num : num
}

function itsTime() {
  var time = new Date()
  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()

  var hex = `#${newNum(hours)}${newNum(minutes)}${newNum(seconds)}`
  
  bg.style.backgroundColor = hex
  
  clock.innerHTML = `${newNum(hours)}:${newNum(minutes)}:${newNum(seconds)}`
}

setInterval(itsTime, 1000)