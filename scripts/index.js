const soundsKeys = {
  1: 'ui',
  2: 'queIssoMeuFilho'
}

const sounds = {
  ui: new Audio('../assets/sons/ui.mp3'),
  queIssoMeuFilho: new Audio('../assets/sons/que-isso-meu-filho.mp3')
};

const handleSound = (soundId) => {
  sounds[soundId].currentTime = 0
  sounds[soundId].play()
}

function changeHiddenShortcuts() {
  const shortcuts = document.getElementById('shortcuts')

  shortcuts.classList.toggle('active')
}

document.addEventListener('keydown', (event) => {
  const { key } = event
  const idSound = soundsKeys[key]

  if(idSound) {
    handleSound(idSound)
  } 
})