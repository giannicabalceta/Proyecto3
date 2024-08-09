const caja = document.getElementsByClassName("caja")
const texto = document.getElementById("texto")

for (let index = 0; index < caja.length; index++) {

    caja[index].addEventListener("click", function () {

        caja[index].textContent="☠️"
        
        let lista = []
         
        for (let index = 0; index < caja.length; index++) {
            if (caja[index].textContent==="") { 
                lista.push(index)
            

            }
            
            
        }

            let listaAleatoria = Math.floor(Math.random()* lista.length)
            let numAle = lista[listaAleatoria]
            caja[numAle].textContent="💀"
            
            
            if (caja[0].textContent === "☠️" && caja[1].textContent === "☠️" && caja[2].textContent === "☠️" ) {

                texto.innerHTML="Has ganado"
                
            }else{
                if (caja[3].textContent === "☠️" && caja[4].textContent === "☠️" && caja[5].textContent === "☠️") {
                    
                    texto.innerHTML="Has ganado"
                }else{
                    if (caja[6].textContent === "☠️" && caja[7].textContent === "☠️" && caja[8].textContent === "☠️") {
                        
                        texto.innerHTML="Has ganado"
                    }else{
                        if (caja[0].textContent === "☠️" && caja[3].textContent === "☠️" && caja[6].textContent === "☠️") {
                            
                            texto.innerHTML="Has ganado"
                        }else{
                            if (caja[1].textContent === "☠️" && caja[4].textContent === "☠️" && caja[7].textContent === "☠️") {
                                 texto.innerHTML="Has ganado"
                            }else{
                                if (caja[2].textContent === "☠️" && caja[5].textContent === "☠️" && caja[8].textContent === "☠️") {
                                    
                                    texto.innerHTML="Has ganado"
                                }else{
                                    if (caja[0].textContent === "☠️" && caja[4].textContent === "☠️" && caja[8].textContent === "☠️") {
                                        
                                        texto.innerHTML="Has ganado"
                                    }else{
                                        if (caja[2].textContent === "☠️" && caja[4].textContent === "☠️" && caja[6].textContent === "☠️") {
                                            texto.innerHTML="Has ganado"
                                        }
                                    }
                                }
                            }
                        }
                    }

                    
                }
                
            }  if (caja[0].textContent === "💀" && caja[1].textContent === "💀" && caja[2].textContent === "💀") {
                
                texto.innerHTML="Has perdido"
            }else{
                if (caja[3].textContent === "💀" && caja[4].textContent === "💀" && caja[5].textContent === "💀") {
                    
                    texto.innerHTML="Has perdido"
                }else{
                    if (caja[6].textContent === "💀" && caja[7].textContent === "💀" && caja[8].textContent === "💀") {
                        
                        texto.innerHTML="Has perdido"
                    }else{
                        if (caja[0].textContent === "💀" && caja[3].textContent === "💀" && caja[6].textContent === "💀") {
                            
                            texto.innerHTML="Has perdido"
                        }else{
                            if (caja[1].textContent === "💀" && caja[4].textContent === "💀" && caja[7].textContent === "💀") {
                                
                                texto.innerHTML="Has perdido"
                            }else{
                                if (caja[2].textContent === "💀" && caja[5].textContent === "💀" && caja[8].textContent === "💀") {
                                    
                                    texto.innerHTML="Has ganado"
                                }else{
                                    if (caja[0].textContent === "💀" && caja[3].textContent === "💀" && caja[6].textContent === "💀") {
                                        
                                        texto.innerHTML="Has perdido"
                                    }else{
                                        if (caja[1].textContent === "💀" && caja[4].textContent === "💀" && caja[7].textContent === "💀") {
                                            
                                            texto.innerHTML="Has perdido"
                                        }else{
                                            if (caja[2].textContent === "💀" && caja[5].textContent === "💀" && caja[8].textContent === "💀") {
                                                
                                                texto.innerHTML="Has ganado"
                                            }else{
                                                if (caja[0].textContent === "💀" && caja[4].textContent === "💀" && caja[8].textContent === "💀") {
                                                    
                                                    texto.innerHTML="Has perdido"
                                                }else{
                                                    if (caja[2].textContent === "💀" && caja[4].textContent === "💀" && caja[6].textContent === "💀") {
                                                        
                                                        texto.innerHTML="Has perdido"
                                                    }
                                                } 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }    
                }
            }
            

            
                
                
                
            
        
         




         






         
        
         
         
        
         
       



        
      
            
        
        
        
    })
    
    
}








