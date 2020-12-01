import { gsap } from "gsap";

// console.log("colorchange working")

const colorTL = gsap.timeline();

export function colorAnimation(){
    colorTL.to("#yellow-2",{duration:1, fill: "#754C9C"}, "switch") 
            .to("#time",{duration:1, fill: "#82C776"}, "switch") 
            .to("#temp",{duration:1, fill: "#82C776"}, "switch") 
            .to("#bottom-line",{duration:1, stroke: "#82C776"}, "switch") 
            .to("#sped",{duration:1, fill: "#82C776"}, "switch") 
            .to("#rect-4",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-5",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-6",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-7",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-8",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-9",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-10",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-11",{duration:1, fill: "#82C776"}, "switch")
            .to("#rect-12",{duration:1, fill: "#82C776"}, "switch")
            .to("#song",{duration:1, fill: "#82C776"}, "switch")
            .to("#artist",{duration:1, fill: "#82C776"}, "switch")
            .to("#gears-p",{duration:1, fill: "#82C776"}, "switch")
            .to("#spedometer-shape",{duration:1, fill: "#D4FFCC"}, "switch")
            .to("#rect-1",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#rect-2",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#rect-3",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#gears-r",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#gears-n",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#gears-d",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#gears-l",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#record-outter",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#record-middle",{duration:1, fill: "#F27B9D"}, "switch")
            .to("#record-label",{duration:1, fill: "#754C9C"}, "switch")
            .to("#flower",{duration:1, fill: "#F37A15"}, "switch")
            .to("#speedTag",{duration:1, fill: "#F37A15"}, "switch")
            .to("#mph",{duration:1, fill: "#F37A15"}, "switch")
            .to("#map",{duration:1, stroke: "#FDD303"}, "switch")
            .to("#bottom-rectangle",{duration:1, fill: "#462862"}, "switch")
            .from("#Arrived",{alpha:0}, "switch")
            
     ; 

    return colorTL;
}