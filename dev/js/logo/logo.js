import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const logoTL = gsap.timeline();

gsap.set("#w-cp",{transformOrigin: "left"});

gsap.set("#circle-start",{rotationX:180});


export function logoAnimation(){
   
    logoTL.from("#v",{duration:.5, y: -500, alpha:0})
            .from("#w-cp",{duration:.5, alpha:0, scale:0, x:-300})
            .from("#circle-start",{duration:.5, alpha:0, drawSVG: "0"})
            .from("#circle",{duration:.25, alpha:0}, "byeCircle")
            .to("#circle-start",{duration:.25, alpha:0}), "byeCircle";

    return logoTL;
}