import React from 'react';
import ReactDOM from 'react-dom';
import {runCanvas} from './canvas.js';
import {MainButtons} from './components/MainButtons.js';
import {Orb} from './components/Orb.js';
import {AdditionalComponents} from './components/additional/AdditionalComponents.js';
import {loadParticles} from './particles.js';

runCanvas();
loadParticles();
window.globalVar = {};

ReactDOM.render(<Orb />,document.getElementById("maincontentwrapper"));
ReactDOM.render(<MainButtons />,document.getElementById("buttoncontainer"));
ReactDOM.render(<AdditionalComponents />,document.getElementById("footer"));
