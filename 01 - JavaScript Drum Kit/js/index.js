document.addEventListener('keydown', handleKeydownEvent)

function handleKeydownEvent(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (audio) playSample(audio)
  
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (key) animateKey(key)
}

function playSample(audio) {
  audio.currentTime = 0
  audio.play()
}

function animateKey(key) {
  key.classList.add('playing')
  key.addEventListener('transitionend', () => {
    key.classList.remove('playing')
  })
}