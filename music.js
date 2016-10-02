/**
 * Created by Daniel on 10/1/2016.
 */
let audioContext = new AudioContext();

fetch('audio/bass.wav')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      let sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = false;
    sourceNode.connect(audioContext.destination);
    sourceNode.start();
    })
    //console.log('Decoded', audioBuffer))
    .catch(e => console.error(e));