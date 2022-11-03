import { useEffect, useRef } from "react";
import { gsap } from 'gsap'

export default function Animation () {
    const comp = useRef(); // create a ref for the root level element (we'll use it later)
    
    useEffect(() => {
      
    gsap.to("#home", {
        x:400,
        rotation: 360,
        duration: 6
    })
      
      return () => { 
        // cleanup code (optional)
      }
      
    }, []); // <- empty dependency Array so it doesn't re-run on every render!
}