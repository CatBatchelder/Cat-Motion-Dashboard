//console.log( "is scripts working");

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {backgroundAnimation} from "./logo/background.js";
import {logoAnimation} from "./logo/logo.js";
import {carAnimation} from "./logo/car.js";
import {transitionAnimation} from "./logo/transition.js";
import {spedometerAnimation} from "./design/spedometer.js";
import {musicAnimation} from "./design/music.js";
import {prndlAnimation} from "./design/prndl.js";
import {mapAnimation} from "./design/map.js";
// import {musicAnimationTwo} from "./design/music.js";
//import {movingAnimation} from "./move/moving.js";
import {colorAnimation} from "./move/colorChange.js";

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation())
        .add(logoAnimation())
        .add(carAnimation())
        .add(transitionAnimation())
        .add(spedometerAnimation(),"start-engine")
        .add(musicAnimation(),"start-engines")
        .add(prndlAnimation(),"start-engines")
        .add(mapAnimation(),"start-engines")
        // .add(musicAnimationTwo(), "move")
   //     .add(movingAnimation(), "move")
       .add(colorAnimation()) 
        ;


// //instantiate GSDevTools with default settings
GSDevTools.create();

