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

const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation())
        .add(logoAnimation())
        .add(carAnimation())
        .add(transitionAnimation())
        .add(spedometerAnimation())
        .add(musicAnimation())
        ;


// //instantiate GSDevTools with default settings
GSDevTools.create();

