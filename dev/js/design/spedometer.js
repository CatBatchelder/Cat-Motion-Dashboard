//console.log( "is spedometer working");

import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#sped", {transformOrigin: "left bottom"});
gsap.set("#spedometer-shape", {transformOrigin: "left bottom"});

const spedometerTL = gsap.timeline();


export function spedometerAnimation(){
     spedometerTL.from("#sped",{duration:.5, scale:0, alpha: 0,  ease: "none"}, "sped-start")
     spedometerTL.from("#spedometer-shape",{duration:.5, scale:0, alpha: 0,  ease: "none"}, "sped-start")
     spedometerTL.from("#speed",{duration:.5, alpha: 0,  ease: "none"})
     spedometerTL.from("#mph",{duration:.5, alpha: 0, x:-40})
     spedometerTL.from("#rect-1",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-2",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-3",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-4",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-5",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-6",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-7",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-8",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-9",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-10",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-11",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.from("#rect-12",{duration:.25, alpha: 0}, "-=.15")
     spedometerTL.to("#rect-1",{duration:.25, fill: "#82C776"})
     spedometerTL.to("#rect-2",{duration:.25, fill: "#82C776"})
     spedometerTL.to("#rect-3",{duration:.25, fill: "#82C776"})

     ; 

    return spedometerTL;
}
