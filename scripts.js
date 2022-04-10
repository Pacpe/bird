

let comecar;

function comecoJogo() {
    comecar = Number(prompt("Queres jogar com quantos cards"));
    let impar = comecar % 2;
    while (comecar < 4 || comecar > 14 || impar !== 0) {
        comecar = Number(prompt("Queres jogar com quantos cards"));
        impar = comecar % 2;
    }
    adicionarCard();
}


function adicionarCard() {
    for (let i = 0; i < comecar; i++) {
        let acessarCards = document.querySelector(".cards");        
        acessarCards.innerHTML += `<div class="cardzin"><img src="front.png" alt="Parrot"></div>`;         
    }     
}
     

          
      

   





















comecoJogo();
