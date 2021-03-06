/**
 * App para el juego piedra, papel o tijera
 * Math.floor()
 * Math.random()
 * setInterval
 * clearInterval(procesoId);
 * Array
 * Objetos
 */

/**
 * Variables
 */
const jugadaPC = [
    "fa-hand-rock", "fa-hand-paper", "fa-hand-scissors"
];

const nombreDeJugada = {
    "fa-hand-rock": '<i class="fas fa-hand-rock"></i>',
    "fa-hand-paper": '<i class="fas fa-hand-paper" data-id="fa-hand-paper"></i>',
    "fa-hand-scissors": '<i class="fas fa-hand-scissors" data-id="fa-hand-scissors"></i>'
}


let procesoJugada = null;
let procesoId = null;
let contadorPC = 0;
let contadorTu = 0;
let fin = false;
//nodos
const buttons = document.querySelector(".buttons");
const tu = document.querySelector(".tu");
const pc = document.querySelector(".pc");
const jugada = document.querySelector(".jugada");

/**
 * Funciones
 */
const playRandom = () => {
    pc.textContent = contadorPC;
    tu.textContent = contadorTu;

    procesoId = setInterval(
        () => {
            let indice = Math.floor(Math.random() * 3);
            procesoJugada = jugadaPC[indice];
        },
        100
    );

}

const playRocketPaperScissors = e => {
    if(fin)
        return;
    if(!e.target.dataset.id)
        return;
    jugada.innerHTML = `${nombreDeJugada[e.target.dataset.id]}-${nombreDeJugada[procesoJugada]}`;
    if (e.target.dataset.id !== procesoJugada) {
        switch (e.target.dataset.id) {
            case "fa-hand-rock":
                if (procesoJugada === "fa-hand-paper")
                    pc.textContent = ++contadorPC;
                else
                    tu.textContent = ++contadorTu;
                break;
            case "fa-hand-paper":
                if (procesoJugada === "fa-hand-scissors")
                    pc.textContent = ++contadorPC;
                else
                    tu.textContent = ++contadorTu;
                break;
            case "fa-hand-scissors":
                if (procesoJugada === "fa-hand-rock")
                    pc.textContent = ++contadorPC;
                else
                    tu.textContent = ++contadorTu;
                break;
        }
    }
    if (contadorPC === 3 || contadorTu === 3) {
        fin = true;
        stopRandom();
        jugada.innerHTML = `${nombreDeJugada[e.target.dataset.id]}-${nombreDeJugada[procesoJugada]}<h3>Fin de partida</h3>`;
    }
}

const stopRandom = () => {
    clearInterval(procesoId);
}



/**
 * Eventos
 */
window.addEventListener(
    "load",
    playRandom
);

buttons.addEventListener(
    "click",
    playRocketPaperScissors
);