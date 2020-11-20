import { gsap } from "gsap";

const transitionTL = gsap.timeline();


export function transitionAnimation(){
    transitionTL.to("#vw-logo",{duration:.5, scale: 3, transformOrigin: "center", alpha:0}, "start")
                .to("#background",{duration:.75, scale: 3, transformOrigin: "center", alpha: 0}, "start")
                .from("#yellow-2",{duration:1, scale: .2, transformOrigin: "center", alpha:0}, "start")
                .to("#bottom-line",{duration:1, stroke: "#EE7A1D"}, "start")
                .to("#time",{duration:1, fill: "#EE7A1D"}, "start")
                .to("#temp",{duration:1, fill: "#EE7A1D"}, "start")
        ;

    return transitionTL;
}
