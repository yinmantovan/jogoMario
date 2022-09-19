const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
// o querySelector funciona para class e id

// arrow function, outra maneira de criar funca no js
// funcao anonima
const jump = () => {
    mario.classList.add("jump-mario");
    // um script altera o dom, nesse caso adiciono uma class
//passa dois atributos primerio a funcao e depois o tempo
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);  
    // o 500ms é o tempo do pulo do mario

};

// Criaçao do loop game
const loopGame = setInterval(() =>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    //o position verifica a situacao do jogo
    //se esta parado ou esta em jogo.
    //em algum momento ele vai parar
    //intervalo da funcao de tempos em tempos
    pipe.style.animation = "none"
    //parar a a animacao
    pipe.style.left = `${pipePosition}px`;
    //parar a animacao do moario
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    
    clearInterval(loopGame)
    }
}, 10);

//funcao de pulo
document.addEventListener("keydown", jump);