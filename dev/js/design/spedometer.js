import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#sped-cp", {transformOrigin: "center"});

const spedometerTL = gsap.timeline();


export function spedometerAnimation(){
    spedometerTL.from("#sped-cp",{duration:1, alpha:0, scale:0})
        ; 

    return spedometerTL;
}
