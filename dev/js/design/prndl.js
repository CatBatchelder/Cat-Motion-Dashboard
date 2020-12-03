import { gsap } from "gsap";


  gsap.set("#prndl-background-outer", {transformOrigin: "left"});
  gsap.set("#prndl-background-inner", {transformOrigin: "left"});
  gsap.set("#gears", {transformOrigin: "center"});

const prndlTL = gsap.timeline();


export function prndlAnimation(){
    prndlTL.from("#gears",{duration:1, alpha: 0, scale: 0}, "start")
            .from("#prndl-background-outer",{duration:1, alpha: 0, scale: 0}, "start")
            .from("#prndl-background-inner",{duration:1, alpha: 0, scale: 0}, "start")
            .to("#gears-p",{duration:1.25, fill: "#82C776"}, "first-gear")
            .to("#gears-r",{duration:1.25, fill: "#EE7A1D"}, "first-gear")
            .to("#gears-r",{duration:1.25, fill: "#82C776"}, "second-gear")
            .to("#gears-n",{duration:1.25, fill: "#EE7A1D"}, "second-gear")
            .to("#gears-n",{duration:1.25, fill: "#82C776"}, "third-gear")
            .to("#gears-d",{duration:1.25, fill: "#EE7A1D"}, "third-gear")

     ; 

    return prndlTL;
}
