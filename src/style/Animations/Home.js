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
            end: `${mobile ? "top -2%" : "=+10"}`,
            scrub: true
            
        },
        y: '-20vh',
        duration: 3,
        opacity: 0,
        })

    
    // - - - P R O J E C T - - - //
    gsap.to('#ArrowLeft', {
        scrollTrigger: {
            trigger: "#ArrowLeft",
            start: `${mobile ? "bottom 10%" : "bottom 70%"}`,
            end: `${mobile ? "1px 40%" : "bottom 20%"}`,
            pin: "true",
            scrub: "true",
     
            
        },
        y: `${mobile ? "45vh" : "45vh"}`,
        x:`${mobile ? "-5vw" : "-20vw"}`,
        scale:`${mobile ? "0.9" : "0.6"}`,
     
        duration: 1,     
        rotation: '0'     
        })
  
    gsap.to('#ArrowRight', {
        scrollTrigger: {
            trigger: "#ArrowRight",
            start: `${mobile ? "1px 80%" : "bottom 70%"}`,
            end: `${mobile ? "1px 30%" : "bottom 20%"}`,
            scrub: "true",
           
            
        },
        y: `${mobile ? "45vh" : "45vh"}`,
        x:`${mobile ? "5vw" : "20vw"}`,
        scale: ('0.6'),             
        duration: 3,
        rotation: '180'
             
        })
    
    gsap.from('#ProjectsNeon', {
        scrollTrigger: {
            trigger: '#ProjectsNeon',
            start: "top 105%",
            end: "top 70%",
            scrub: true,                
            },
            opacity: '0.5',
            y: '-5vw',
            scale: 1.5,                    
           
            })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    },[])
  

}



 