import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './BarkMeter.css';
import audio from '../Whistle.mp3';

const BarkMeter = () => {
    const [ trigger, setTrigger ] = useState(false);
    const [audioTrigger, setAudioTrigger ] = useState(false);
    const [ listenState, setListenState ] = useState(false);

    const playSound = () => {
        new Audio(audio).play();
    }

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
                    playSound();
                    audioTrigger ? setAudioTrigger(false) : setAudioTrigger(true);
                }
                
            }
        })
        .catch(function(err) {
            console.error(err);
        })
    }

    const handleListen = (e) => {
        e.preventDefault();
        trigger ? setTrigger(false) : setTrigger(true);
    }

    return (<>
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
        <div className={"icons"}>{ 
                trigger ? <FontAwesomeIcon style={{color: "red"}} icon={faMicrophone} />
                : ""
            }
            <div>{ audioTrigger ? 
                <FontAwesomeIcon style={{color: "grey"}} icon={faVolumeUp} />
                : ""
            }</div>
            
        </div>

        
        
        <div className={"listen"}>
            <button onClick={handleListen}>LISTEN</button>
        </div>
        
    </>)

};

export default BarkMeter;