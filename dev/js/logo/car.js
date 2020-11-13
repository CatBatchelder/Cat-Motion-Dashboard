import { gsap } from "gsap";

const carTL = gsap.timeline();

export function carAnimation(){
    carTL.from("#old-vw",{duration:.2, x:-100, alpha:0}, "startline")
        .to("#old-vw",{duration:.5, x:400}, "tempReveal")
        .from("#temp-cp",{duration: .25,  scale:0, ease: "none"}, "tempReveal")
        .to("#old-vw",{alpha:0}, "byeold")
        .from("#new-vw",{duration:.5, x:400, alpha: 0}, "byeold")
        .to("#new-vw",{duration:.5, x:1030}, "timeReveal")
        .from("#time-cp",{duration: .25,  scale:0, ease: "none"}, "timeReveal")
        .from("#line-cp",{duration:1.7,  scale:0, ease: "none"}, "startline");

    return carTL;
}
