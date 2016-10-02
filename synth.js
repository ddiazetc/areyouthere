/**
 * Created by Daniel on 10/1/2016.
 */

//MONOSYNTH
/*let synth = new Tone.MonoSynth({
    oscillator: {
        type: 'sawtooth'
    },
    envelope: {
        attack: 0.1,
        release: 4,
        releaseCurve: 'linear'
    },
    filterEnvelope: {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 1000
    }
    //frequency: 0.01
});
synth.toMaster();
synth.triggerAttackRelease('C4',1);
    */

//DUOSYNTH
let envelope = {
    attack: 0.1,
    release: 4,
    releaseCurve: 'linear'
};

let filterEnvelope = {
    baseFrequency: 200,
    octaves: 2,
    attack: 0,
    decay: 0,
    release: 1000
};

let synth = new Tone.DuoSynth({
    harmonicity: 1,
    voice0:{
        oscillator: {
            type: 'sawtooth'
        },
        envelope,
        filterEnvelope
    },
    voice1:{
        oscillator: {
            type: 'sine'
        },
        envelope,
        filterEnvelope
    },
    vibratoRate:0.5,
    vibratoAmount: 0.1
 });
synth.toMaster();
synth.triggerAttackRelease('C4',1);

new Tone.Loop(() => {
    synth.triggerAttackRelease('C4','8n', '+4n');
}, '1m').start(); //number is how many seconds in btwn repeats

Tone.Transport.bpm.value = 240;
Tone.Transport.start();