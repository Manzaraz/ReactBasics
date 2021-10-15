import { useState, useEffect } from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);    
    // const [name, setName] = useState("Chris")


    useEffect(() => {
        // console.log("Moviendo el Scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);
        
        // detectarScroll();
        window.addEventListener("scroll", detectarScroll)

        return () => {
            window.removeEventListener("scroll", detectarScroll);
            // console.log("Fase de Desmontaje en función");
        }

    },[scrollY]);
    useEffect(() => {
        // console.log("Fase de montaje")
    },[])
    useEffect(() => {
        // console.log("Fase de Actualización")
    })
    useEffect(() => {
        
        return () => {
            // console.log("Fase de Desmontaje");
            
        }
    })

    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida </h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}
