import DestaquesCv from './DestaquesCv'
import ProjetosDesenvolvidos from './ProjetosDesenvolvidos'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Repositorio from './Repositorio';

gsap.registerPlugin(ScrollTrigger);

export default function Home () {
    
    useEffect(() =>{
       
       gsap.to("#setaEsquerda", 8, {y:-20, x: 80, rotate : '20deg'})
       gsap.to("#setaDireita", 8 , {y:-20, x: -80, rotate : '160deg'})

        gsap.from("#surpresa", {
            scrollTrigger: {
               trigger: "top",
               toggleActions: "restart none none none"
       }, duration: 2, opacity: 0, y:40, stagger:0.25})
       
       gsap.from("#revela", {
        scrollTrigger: {
           trigger: "#revela",
           toggleActions: "restart none none none"
   }, duration: 4, opacity: 0, y:40, stagger:1.5})
       
        gsap.from("#aparece", {
            scrollTrigger: {
               trigger: "#aparece",
               toggleActions: "restart none none none"
       }, duration: 3, opacity: 0, y:20, stagger:0.55})
    }, [])

    return(<>
        <DestaquesCv />
        <ProjetosDesenvolvidos />
        <Repositorio />        
        </>)

}