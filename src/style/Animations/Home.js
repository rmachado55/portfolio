import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Animations = () => { 

  const mobile = (window.screen.width < 740 ? true : false)

  useEffect(() => {
    
    // - - - S T A R T - - -  
    
    gsap.to('#home', {
        scrollTrigger: {
            trigger: "#home",
            start: `${mobile ? "top -1%" : "top 0"}`,
            end: `${mobile ? "top -20%" : "=+100"}`,
            scrub: true
            
        },
        y: '-20vh',
        duration: 3,
        opacity: 0,
        })

    
    // - - - P R O J E C T - - - //

    gsap.to("#ArrowLeft", {
        scrollTrigger: {
            trigger: "#ArrowLeft",
            start: mobile ? 'bottom 65%' : 'bottom 70%',
            end: mobile?  "bottom 2%" : "bottom 20%",       
            scrub: "true",           
        },
        y: mobile ? "67vh" : "45vh",
        x: mobile? "-12vw" : "-20vw",
        scale: "0.6",     
        duration: 3,     
        rotation: mobile ? '60' :'0'     
        })
  
    gsap.to("#ArrowRight", {
        scrollTrigger: {
            trigger: "#ArrowRight",
            start: mobile ? 'bottom 65%' : 'bottom 70%',
            end: mobile?  "bottom 2%" : "bottom 20%",
            scrub: "true",            
        },
        y: mobile ? "67vh" : "45vh",
        x: mobile ? "12vw" : "20vw",
        scale: "0.6",             
        duration: 3,
        rotation: mobile ? '130' :'180'             
        })


    // - - - P R O J E C T S - - -  
        
    gsap.from('#ProjectsNeon', {
        scrollTrigger: {
            trigger: '#ProjectsNeon',
            start: "top 69%",
            end: (mobile ? "top 30%" : "top 10%"),
            scrub: true,                
            },
            opacity: '0',
            y: (mobile ? '-25vh' : '-15vh'),
            scale: 1.5,                    
           
            })


    // - - MY GIT - - 
    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skewBox", "skewY", "deg"), 
    clamp = gsap.utils.clamp(-2, 2);

    ScrollTrigger.create({
    onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -100);

    if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {skew: 0,
                        duration: 0.3,
                        easeIn: "Elastic",
                        overwrite: true,                                       
                        onUpdate: () => skewSetter(proxy.skew)});
    }
    }
    });

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set("#skewBox", {transformOrigin: "center center", force3D: true});
  
   
  
    },)
  

}



 