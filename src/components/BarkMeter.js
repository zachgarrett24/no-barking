import React from 'react';

const BarkMeter = () => {

    const listening = () => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then(function(stream) {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1)
    
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024
    
            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            javascriptNode.onaudioprocess = function() {
                const array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                let values = 0;
                const length = array.length;
                for(let i = 0; i < length; i++){
                    values += (array[i]);
                }
                const average = values / length;
    
                console.log(Math.round(average));
            }
        })
        .catch(function(err) {
            console.error(err);
        })
    }

    // listening();

    return (
        <h1>Hello World</h1>
    )

};

export default BarkMeter;