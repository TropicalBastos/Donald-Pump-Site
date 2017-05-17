import React from 'react';
import ReactDOM from 'react-dom';
import {runCanvas} from './canvas.js';
import {MainButtons} from './components/MainButtons.js';
import {Orb} from './components/Orb.js';

runCanvas();
window.globalVar = {};

ReactDOM.render(<Orb />,document.getElementById("maincontentwrapper"));
ReactDOM.render(<MainButtons />,document.getElementById("buttoncontainer"));
