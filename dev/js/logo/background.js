import {gsap} from "gsap";

const backgroundTL = gsap.timeline();

//gsap.set(".rings",{transformOrigin: "center"});


export function backgroundAnimation(){
    backgroundTL.from(".logo-rectangles",{duration:.2, x:1000, stagger: 0.1})
                .to(".logo-rectangles",{duration:.5, alpha:0}, "gradient")
                .from("#background",{duration:.5, alpha:0},  "gradient");

    return backgroundTL;

}
