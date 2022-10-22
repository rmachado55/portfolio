import DestaquesCv from './Highlights'
import Projects from './Projects'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Repositorio from './MyGit';
import Certificados from './Courses';

gsap.registerPlugin(ScrollTrigger);

export default function Home ({language, setLanguage}) {
    
    useEffect(() =>{
       
       gsap.from("#setaEsquerda", {
            scrollTrigger: {
               trigger: "bottom",
               start: "+=100",
               end: "+=400",
               scrub: true,
               toggleActions: "restart none none none"}
            , y:-200, x: -200, rotate : '170deg', scale : 0})
       gsap.from("#setaDireita", {
            scrollTrigger: {
               trigger: "bottom",
               start: "+=100",
               end: "+=400",
               scrub: true,
               toggleActions: "restart none none none"}
            , y:-200, x: 200, rotate : '10deg', scale : 0})

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
            <DestaquesCv language={language} setLanguage={setLanguage} />
            <Projects />
            <Repositorio />
            <Certificados />     
          </>)

}