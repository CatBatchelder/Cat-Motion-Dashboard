//console.log( "is scripts working");

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {backgroundAnimation} from "./logo/background.js";
import {logoAnimation} from "./logo/logo.js";
import {carAnimation} from "./logo/car.js";
import {transitionAnimation} from "./logo/transition.js";
import {spedometerAnimation} from "./design/spedometer.js";
import {musicAnimation} from "./design/music.js";
import {prndlAnimation} from "./design/prndl.js";
import {mapAnimation} from "./design/map.js";
import {movingAnimation} from "./move/moving.js";
import {colorAnimation} from "./move/colorChange.js";
// import { speedCounter } from "./move/speed.js";

const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation())
        .add(logoAnimation())
        .add(carAnimation())
        .add(transitionAnimation())
        .add(spedometerAnimation(),"start-engine")
        .add(musicAnimation(),"start-engines")
        .add(prndlAnimation(),"start-engines")
        .add(mapAnimation(),"start-engines")
        .add(movingAnimation(), "move")
        // .add(speedCounter(), "move")
        .add(colorAnimation()) 
        ;


// //instantiate GSDevTools with default settings
GSDevTools.create();

