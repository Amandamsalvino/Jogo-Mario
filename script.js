const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const texto = document.querySelector("h1")



function pulo () {

mario.classList.add("pulo");

setTimeout(() => {

    mario.classList.remove("pulo");
}, 500);

    
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px"," ");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./assets/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        
        texto.innerHTML = "GAME OVER"


        clearInterval(loop);
        
    }
    
}, 10);













document.addEventListener('keydown', pulo);