/**
 * Created by Daniel on 10/1/2016.
 */
var notes = ["C", "C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var notesC = ["C","D","E","F","G","A","B"];
var synth = new Tone.Synth({
    "oscillator" : {
        "type" : "square"
    },
    "envelope" : {
        "attack" : 0.01,
        "decay" : 0.2,
        "sustain" : 0.2,
        "release" : 0.2
    }
}).toMaster();
//synth.triggerAttackRelease('C4', 5);
