const synth = window.speechSynthesis
const voiceSelect = document.getElementById('voice-select')
let voices

function addVoicesToSelect() {
  voices = synth.getVoices()

  for (let i = 0; i < voices.length; i++) {
    const options = document.createElement('option')
    options.textContent = `${voices[i].name}`

    if (voices[i].default) {
      options.textContent += ' - DEFAULT'
    }

    options.setAttribute('data-name', voices[i].name)
    options.setAttribute('data-lang', voices[i].lang)
    voiceSelect.appendChild(option)
  }
}

function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input')

  const sayThis = new SpeechSynthesisUtterance(textInput.value)

  const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      sayThis.voice = voices[i]
    }
  }

  synth.speak(sayThis)
}

addVoicesToSelect()
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect
}

document.getElementById('form').addEventListener('submit', onSubmit)