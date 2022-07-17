const sounds = {
  ui: new Audio('../assets/sons/ui.mp3'),
  queIssoMeuFilho: new Audio('../assets/sons/que-isso-meu-filho.mp3')
};

const handleSound = (soundId) => {
  sounds[soundId].currentTime = 0
  sounds[soundId].play()
}