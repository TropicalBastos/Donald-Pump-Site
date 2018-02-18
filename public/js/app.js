import React from 'react';
import ReactDOM from 'react-dom';
import {runCanvas} from './canvas.js';
import {MainButtons} from './components/MainButtons.js';
import {Orb} from './components/Orb.js';
import {AdditionalComponents} from './components/additional/AdditionalComponents.js';
import {loadParticles} from './particles.js';

loadParticles();

try{
    runCanvas();
    //global var that is used by components to fire events from other components
    window.globalVar = {};
    //global bool that tests if a modal is already open
    window.MODAL = false;

    ReactDOM.render(<Orb />,document.getElementById("maincontentwrapper"));
    ReactDOM.render(<MainButtons />,document.getElementById("buttoncontainer"));
}catch(e){
    //do nothing
}

//footer
ReactDOM.render(<AdditionalComponents />,document.getElementById("footer"));
