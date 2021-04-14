import React from 'react';
import ReactDOM from 'react-dom';
import './BarkMeter.css';

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
                if(average > 75){
                    console.log(Math.round(average));
                }
                
            }
        })
        .catch(function(err) {
            console.error(err);
        })
    }

    // listening();

    return (
        <div className={"meter-wrapper"}>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
            <div className={"meter"}></div>
        </div>
    )

};

export default BarkMeter;