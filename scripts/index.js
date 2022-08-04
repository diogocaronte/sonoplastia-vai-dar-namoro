const sounds_shortcuts = new Map();
sounds_shortcuts.set("q", 0);
sounds_shortcuts.set("w", 1);
sounds_shortcuts.set("e", 2);
sounds_shortcuts.set("r", 3);
sounds_shortcuts.set("t", 4);
sounds_shortcuts.set("y", 5);
sounds_shortcuts.set("u", 6);
sounds_shortcuts.set("i", 7);
sounds_shortcuts.set("o", 8);
sounds_shortcuts.set("a", 9);
sounds_shortcuts.set("s", 10);
sounds_shortcuts.set("d", 11);
sounds_shortcuts.set("f", 12);

const assets_path = '../assets/sons/';
const sounds = [
  {
    label: 'uuuuuuuuuuuuuuiiiii',
    path: assets_path + 'ui.mp3'
  }, {
    label: 'que isso meu filho, calma',
    path: assets_path + 'que-isso-meu-filho.mp3'
  }, {
    label: 'tomi',
    path: assets_path + 'tomi.mp3'
  }, {
    label: 'eu não entendi oq você falou',
    path: assets_path + 'eu-nao-entendi-o-que-ele-falou.mp3'
  }, {
    label: 'Iraaaaaa',
    path: assets_path + 'irraa.mp3'
  }, {
    label: 'cavalo',
    path: assets_path + 'cavalo.mp3'
  }, {
    label: 'esqueça tudo',
    path: assets_path + 'esqueca-tudo.mp3'
  }, /* {
    label: 'não não não não',
    path: assets_path + ''
  }, */ {
    label: 'olha ele aê',
    path: assets_path + 'olha-ele-ae.mp3'
  }, {
    label: 'calma pae',
    path: assets_path + 'calma-pae.mp3'
  }, {
    label: 'ueeeeeeepa',
    path: assets_path + 'uepa.mp3'
  }, {
    label: 'é brincadeira',
    path: assets_path + 'e-brincadeira-ein.mp3'
  }, {
    label: 'chegaaa',
    path: assets_path + 'cheega.mp3'
  }, /* {
    label: 'demaaaais',
    path: assets_path + ''
  }, */ {
    label: 'ele gostaaaaaa',
    path: assets_path + 'ele-gosta.mp3'
  }
];

const $soundsList = document.querySelector('[data-id="sounds"]');
$soundsList.addEventListener('click', ({ target }) => {
  if (target.dataset.type !== "sound-item") return;

  handleSoundByIndex(
    Number(target.dataset.id)
  );
});

for (const [index, sound] of Object.entries(sounds)) {
  $soundsList.insertAdjacentHTML('beforeend', `<button data-id="${index}" data-type="sound-item" type="button">${sound.label}</button>`);
}

const $shortcutList = document.querySelector('[data-id="shortcuts"]');
for (const [key, value] of sounds_shortcuts) {
  $shortcutList.insertAdjacentHTML('beforeend', `<li><span>${key}</span>${sounds[value].label}</li>`);
}

const _lookup_cached_sound = new Map();
const handleSoundByIndex = (soundIndex) => {
  const sound = sounds[soundIndex];

  let sound_cache = _lookup_cached_sound.get(sound);
  if (!sound_cache) {
    sound_cache = new Audio(sound.path);
    _lookup_cached_sound.set(sound, sound_cache);
  }

  sound_cache.currentTime = 0
  sound_cache.play()
}

function changeHiddenShortcuts() {
  const shortcuts = document.getElementById('shortcuts')

  shortcuts.classList.toggle('active')
}

document.addEventListener('keydown', ({ key }) => {
  const index = sounds_shortcuts.get(key);
  if (index === undefined) return;

  handleSoundByIndex(index);
})