const second_hand = document.querySelector(".second-hand")
const minute_hand = document.querySelector(".minute-hand")
const hour_hand = document.querySelector(".hour-hand")

function updateClock() {
  const now = new Date

  const seconds = now.getSeconds()
  const seconds_deg = ((seconds / 60) * 360)
  second_hand.style.transform = `rotate(${seconds_deg}deg)`

  const minutes = now.getMinutes()
  const minutes_deg = ((minutes / 60) * 360) + ((seconds / 60) * 6)
  minute_hand.style.transform = `rotate(${minutes_deg}deg)`

  const hours = now.getHours()
  const hours_deg = ((hours / 12) * 360) + ((minutes / 60) * 30)
  hour_hand.style.transform = `rotate(${hours_deg}deg)`
}

updateClock()
setInterval(updateClock, 1000)