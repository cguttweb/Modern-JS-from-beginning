// this has no support in firefox
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition()
rec.lang = 'en-GB'
// listens and runs if true it keeps listening
rec.continuous = false

rec.start()
rec.onresult = function (e) {
  const acceptedColours = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'cyan',
    'black'
  ]

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColours.includes(script)) {
      document.body.backgroundColor = script
    } else {
      alert('Please say a colour from the accepted list')
    }

  }
  // console.log(e.results[0][0].transcript)
}