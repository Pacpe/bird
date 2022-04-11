

const cartas = [];
const somaDeCartas = [];

let comecar;
function comecoJogo() {
    comecar = Number(prompt("Queres jogar com quantos cards"));
    let impar = comecar % 2;
    while (comecar < 4 || comecar > 14 || impar !== 0) {
        comecar = Number(prompt("Queres jogar com quantos cards"));
        impar = comecar % 2;
    }
    adicionaCards();
}


function atualizaCard() {
        let acessarCards = document.querySelector(".cards");         
        acessarCards.innerHTML = "";
        for (let i = 0; i < comecar; i++) {       
            if (cartas[i].status === "nao-virado") {               
                acessarCards.innerHTML += `<div class="cardzin" onclick="virarCarta(this)"><!--${i}--><img src="front.png" alt="Parrot"></div>`;                
            } else {               
                acessarCards.innerHTML += `<div class="cardzin virado" onclick="virarCarta(this)"><!--${i}--><img src="front.png" alt="Parrot"></div>`;
            }                 
        }     
        contadorJogadas();
}


function adicionaCards() {
    for (let i = 0; i < comecar; i++) {
        const cartasAdicionadas = {
            status: "nao-virado",
            };
        cartas.push(cartasAdicionadas);
    }        
    atualizaCard();
}

function virarCarta(elemento) {
    for (let i = 0; i < comecar; i++) {
        if (elemento.innerHTML === `<!--${i}--><img src="front.png" alt="Parrot">`) {
            cartas[i] = {
                status: "virado",
            };
        }
    }
    atualizaCard();
}

function contadorJogadas() {
    somaDeCartas.push("1");  
    let soma = 0;
    for (let i = 0; i < comecar; i++) {       
        if (cartas[i].status === "virado") {               
            soma += 1;           
    }  
    if (soma === cartas.length) {
        alert(`O jogo acabou! Voce jogou ${somaDeCartas.length - 1} vezes`)
    }    
}}






          
      

   





















comecoJogo();
