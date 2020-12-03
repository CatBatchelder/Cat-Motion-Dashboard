import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { startCounter } from "./speed.js";

//import {colorAnimation} from "./colorChange.js";

gsap.registerPlugin(MotionPathPlugin);

const movingTL = gsap.timeline();

 gsap.set("#map", {transformOrigin: "center"});

export function movingAnimation(){
    console.log("moving");
    movingTL.to("#flower",{duration:1, ease: "none", motionPath:{path: "#map-1", align: "#map-1",autoRotate: true, alignOrigin: [0.5, 0.5], start: .75, end: .65}, onStart: startCounter}, "one")
            .to("#flower",{duration:2, ease: "none", motionPath:{path: "#map-2", align: "#map-2",autoRotate: true, alignOrigin: [0.5, 0.5], start: .74, end: .40}})
            .to("#flower",{duration:2, ease: "none", motionPath:{path: "#map-13", align: "#map-13",autoRotate: true, alignOrigin: [0.5, 0.5], start: 1, end: 0}})
            .to("#flower",{duration:1, ease: "none", motionPath:{path: "#map-8", align: "#map-8",autoRotate: true, alignOrigin: [0.5, 0.5], start: .55, end: .78}})
            .to("#flower",{duration:1, ease: "none", motionPath:{path: "#map-11", align: "#map-11",autoRotate: true, alignOrigin: [0.5, 0.5], start: 1, end: .5}})
           // .from("#arrived",{dureation: 1, alpha:0})
            //.to("#speed", {duration: 2, scale: 1.5}, "one")
            ; 

            //speedCounter();

    return movingTL;
}
// var score:Number = 0;
// var targetScore:Number = 20;

// gsap.("#speed", 1, {score:targetScore, onUpdate:showScore, ease:Linear.easeNone});

// function showScore(){
// trace(score);
// score_mc.score_txt.text = int(score);
// }