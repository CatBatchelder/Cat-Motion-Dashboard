import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {movingAnimation} from "../move/moving.js";

gsap.registerPlugin(DrawSVGPlugin);

//  gsap.set("#record", {transformOrigin: "center"});
  //gsap.set("#gears", {transformOrigin: "center"});

const mapTL = gsap.timeline();


export function mapAnimation(){
    mapTL.from(".map-strokes",{duration:.25, alpha: 0, stagger:.15, drawSVG: "0"})
        .from("#flower",{duration:.25, alpha: 0, onComplete: movingAnimation})

     ; 

    return mapTL;
}
