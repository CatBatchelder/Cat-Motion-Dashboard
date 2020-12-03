import { gsap } from "gsap";


 gsap.set("#record", {transformOrigin: "center"});
 gsap.set("#music-background-outer", {transformOrigin: "center"});
 gsap.set("#music-background-inner", {transformOrigin: "center"});
 gsap.set("#song", {transformOrigin: "center left"});

const musicTL = gsap.timeline();


export function musicAnimation(){
    musicTL.from("#record",{duration:1, alpha: 0, x:500, rotate: "360"}, "start")
            .from("#music-background-outer",{duration:1, alpha: 0, x:500}, "start")
            .from("#music-background-inner",{duration:1, alpha: 0, x:500}, "start")
            .from("#song",{duration:1, alpha: 0, scale:0, x:-80}, "title")
            .from("#artist",{duration:1, alpha: 0, scale:0, x:-80}, "title")
           .to("#record",{ duration: 1, rotate: "360",  repeat: 11}, "title")

     ; 

    return musicTL;
}

// const musicTwoTL = gsap.timeline();

// export function musicAnimationTwo(){
//     musicTwoTL.to("#record",{ duration: 1, rotation:360})
//      ; 

//     return musicTwoTL;
// }
