import { gsap } from "gsap";


 gsap.set("#record", {transformOrigin: "center"});
 gsap.set("#song", {transformOrigin: "center left"});

const musicTL = gsap.timeline();


export function musicAnimation(){
    musicTL.from("#record",{duration:1, alpha: 0, x:500, rotate: "360"})
            .from("#song",{duration:1, alpha: 0, scale:0, x:-80}, "title")
            .from("#artist",{duration:1, alpha: 0, scale:0, x:-80}, "title")
            .to("#record",{ rotate: "360",  repeat: (100)})

     ; 

    return musicTL;
}
