function parabens(){
const flys = document.getElementById("flys");
const parabens = document.getElementById("nome")
console.log(parabens)
const cores = ["yellow","red","purple","green","blue","grey","orange","brown","gold","whitesmoke","yellow","red","purple","green","blue","grey","orange","brown","gold","whitesmoke","yellow","red","purple","green","blue","grey","orange","brown","gold","whitesmoke"]
coresind = 0
for(ind = 0; ind < cores.length; ind++){
    const maisdivs = document.createElement("div");
    maisdivs.setAttribute("id", "flyers")
    maisdivs.style.backgroundColor = cores[ind]
    let asorte = Math.floor(Math.random() * 100)
    let asorte2 = Math.floor(Math.random() * 100)
    maisdivs.style.left = asorte + "%"
    flys.appendChild(maisdivs)
    const maisdivss = document.createElement("div")
    maisdivss.setAttribute("id", "flyers2")
    maisdivss.style.backgroundColor = cores[ind]
    maisdivss.style.left = asorte2 + "%"
    flys.appendChild(maisdivss)
}
setInterval(()=>{
    parabens.style.color = cores[coresind++]
    }, 1000)
    setTimeout(()=>{
    document.location.href = 'http://localhost/git'
    }, 10000)
}

const tabuleiro = document.getElementById("tab")
if(tabuleiro != undefined){
const nota = document.createElement("div")
tabuleiro.appendChild(nota)
const numerodecasas = 9
let ganhou = false
let ganho
    const ul = document.createElement("ul")
    let iniciarjogo = 0
for(ind = 0; ind < numerodecasas;ind++){
    const lis = document.createElement("li")
    lis.classList.add("pecas")
    lis.setAttribute("id", `pecas${ind}`)
    tabuleiro.appendChild(ul)
    ul.appendChild(lis)
    lis.style.cssText = "width: 30px; height: 30px;background: yellow;border: 1px solid whitesmoke"   
    const jogador1 = "X"
    const jogador2 = "O"
    nota.textContent = "Começa as bolas, depois as cruzes, um a vez..."
        const li1 = document.getElementById(`pecas0`)
        const li2 = document.getElementById(`pecas1`)
        const li3 = document.getElementById(`pecas2`)
        const li4 = document.getElementById(`pecas3`)
        const li5 = document.getElementById(`pecas4`)
        const li6 = document.getElementById(`pecas5`)
        const li7 = document.getElementById(`pecas6`)
        const li8 = document.getElementById(`pecas7`)
        const li9 = document.getElementById(`pecas8`)
   
    lis.onclick = (e) =>{
        
            if(iniciarjogo % 2 != 0){
                lis.textContent = jogador1
                iniciarjogo++
            }else{
                lis.textContent = jogador2
                iniciarjogo++
            }
             if(lis.textContent != ""){
                if(li1.textContent == jogador1 && li2.textContent == jogador1 && li3.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    li1.style.background += "grey"
                    li2.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li1.textContent == jogador2 && li2.textContent == jogador2 && li3.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    li1.style.background += "grey"
                    li2.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li4.textContent == jogador1 && li5.textContent == jogador1 && li6.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    li4.style.background += "grey"
                    li5.style.background += "grey"
                    li6.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li4.textContent == jogador2 && li5.textContent == jogador2 && li6.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    li4.style.background += "grey"
                    li5.style.background += "grey"
                    li6.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li7.textContent == jogador1 && li8.textContent == jogador1 && li9.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    li7.style.background += "grey"
                    li8.style.background += "grey"
                    li9.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li7.textContent == jogador2 && li8.textContent == jogador2 && li9.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    li7.style.background += "grey"
                    li8.style.background += "grey"
                    li9.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li1.textContent == jogador1 && li5.textContent == jogador1 && li9.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    
                    li1.style.background += "grey"
                    li5.style.background += "grey"
                    li9.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li1.textContent == jogador2 && li5.textContent == jogador2 && li9.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    
                    li1.style.background += "grey"
                    li5.style.background += "grey"
                    li9.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li3.textContent == jogador1 && li5.textContent == jogador1 && li7.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    
                    li7.style.background += "grey"
                    li5.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li3.textContent == jogador2 && li5.textContent == jogador2 && li7.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    
                    li7.style.background += "grey"
                    li5.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li1.textContent == jogador1 && li4.textContent == jogador1 && li7.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    
                    li1.style.background += "grey"
                    li4.style.background += "grey"
                    li7.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li1.textContent == jogador2 && li4.textContent == jogador2 && li7.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    
                    li1.style.background += "grey"
                    li4.style.background += "grey"
                    li7.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li2.textContent == jogador1 && li5.textContent == jogador1 && li8.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    
                    li5.style.background += "grey"
                    li2.style.background += "grey"
                    li8.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li2.textContent == jogador2 && li5.textContent == jogador2 && li8.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    
                    li5.style.background += "grey"
                    li2.style.background += "grey"
                    li8.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                }else if(li3.textContent == jogador1 && li6.textContent == jogador1 && li9.textContent == jogador1){
                    nota.textContent = "jogador 1 ganhou"
                    
                    li9.style.background += "grey"
                    li6.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador1
                    ganhou = true
                }else if(li3.textContent == jogador2 && li6.textContent == jogador2 && li9.textContent == jogador2){
                    nota.textContent = "jogador 2 ganhou"
                    
                    li9.style.background += "grey"
                    li6.style.background += "grey"
                    li3.style.background += "grey"
                    ganho = jogador2
                    ganhou = true
                    
                }

            }
            if(ganhou == true){
ul.remove()
nota.innerHTML = `Vencedor ${ganho}, parabens!!!<br><div id='outravez'>Jogar outra vez!!!</div>`
const jogar = document.getElementById("outravez")
jogar.onclick = () =>{
    document.location.href = 'http://localhost/git'
}
console.log(ganho)
        }
        
            }
            
             
           
}

}