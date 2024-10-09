import { navigateTo } from "../../router";

const tijera = new URL("../../images/tijera.png", import.meta.url);
const piedra = new URL("../../images/piedra.png", import.meta.url);
const papel = new URL("../../images/papel.png", import.meta.url);

export function juego() {
    class MiJuego extends HTMLElement {
        cuentaRegresiva: number;
        intervalId: number;
        victoriasJugador: number;
        victoriasMaquina: number;

        constructor() {
            super();
            this.cuentaRegresiva = 3;
            this.victoriasJugador = parseInt(localStorage.getItem("victoriasJugador") || "0");
            this.victoriasMaquina = parseInt(localStorage.getItem("victoriasMaquina") || "0");
            this.render();
        }

        empezarCuentaRegresiva() {
            const countdownElement = this.shadowRoot?.querySelector("#countdownNumber");
            const rotatingCircle = this.shadowRoot?.querySelector('.rotating-circle') as HTMLElement;

            this.intervalId = window.setInterval(() => {
                if (this.cuentaRegresiva > 0) {
                    this.cuentaRegresiva--;
                    countdownElement!.textContent = this.cuentaRegresiva.toString();

                    const rotationDegree = (3 - this.cuentaRegresiva) * 360;
                    if (rotatingCircle) {
                        rotatingCircle.style.transform = `rotate(${rotationDegree}deg)`;
                    }

                } else {
                    clearInterval(this.intervalId);
                    window.location.href = "https://santiagosilva68.github.io/ppt-parcel-desafio";
                }
            }, 1000);
        }

        detenerCuentaRegresiva() {
            clearInterval(this.intervalId);
        }

        connectedCallback() {
            this.empezarCuentaRegresiva();
        }
        render() {
            const shadow = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            style.innerHTML = `
                .game-options {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    align-items: flex-end;
                    height: 100vh;
                    overflow: hidden;
                }
                .game-pptj {
                    display: flex;
                    gap: 40px;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100vh;
                    height: 100vh;
                    align-items: center;
                }
                .img-computer img {
                    max-width: 100%;
                    max-height: 100%;
                    width: 120px;
                    height: 240px;
                    cursor: default;
                    opacity: 1;
                    transition: none;
                    transform: rotate(180deg);
                }
                .img-player img {
                    max-width: 100%;
                    max-height: 100%;
                    width: 120px;
                    height: 240px;
                    cursor: pointer;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                    opacity: 1;
                    transform-origin: center;
                }
                .img-player img:hover {
                    transform: scale(1.5);
                    transform-origin: center;
                }
                .img-player:hover img {
                    opacity: 0.3;
                }
                .img-player img:hover {
                    opacity: 1;
                }
                .cuentaRegresiva {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Odibee Sans", sans-serif;
                }

                .circle {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 10px solid #f0f0f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* Nuevo div que simula la rotación */
                .rotating-circle {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 10px solid black;
                    border-bottom: none;
                    border-right: none;
                    transform: rotate(0deg);
                    transition: transform 1s linear;
                }

                #countdownNumber {
                    font-size: 40px;
                    color: black;
                }
                .img-computer {
                    display:flex;
                    gap:40px;
                }
                .img-player {
                    display:flex;
                    gap:40px;
                }

                @media (max-width: 768px) {
                .img-player{
                gap:20px;
                }
                .img-computer {
                gap:20px
                }
                }
                @media (max-width: 768px) {
                .img-computer {
                height: 150px;
                gap:30;
                width:250px;
                }
                .img-player {
                height: 150px;
                gap:30;
                width:250px;
                }
                }
                @keyframes move-to-center {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateY(-70%);
                    }
                }
                @keyframes move-to-center-machine {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateY(70%) rotate(180deg);
                    }
                }

                /* Añadimos esta clase cuando se haga la elección */
                .center-move {
                    animation: move-to-center 0.5s ease forwards;
                }
                .center-move-machine {
                    animation: move-to-center-machine 0.5s ease forwards;
                }           `;
            shadow.appendChild(style);
            const div = document.createElement('div');
            div.classList.add('root');
            div.innerHTML = `
                <div class="game-options">
                    <div class="game-pptj">
                        <div class="img-computer">
                            <img class="computer-piedra ppt computer" id="computerImg" src="${piedra}" alt="piedra">
                            <img class="computer-papel ppt computer" id="computerImg" src="${papel}" alt="papel">
                            <img class="computer-tijera ppt computer" id="computerImg" src="${tijera}" alt="tijera">
                        </div>
                        <div class="cuentaRegresiva">
                            <div class="circle">
                                <!-- Div que simula la rotación -->
                                <div class="rotating-circle"></div>
                                <!-- Número de la cuenta regresiva -->
                                <div id="countdownNumber">${this.cuentaRegresiva}</div>
                            </div>
                        </div>
                        <div class="img-player">
                            <img class="player-piedra img-player-option ppt piedra-game" id="piedra" src="${piedra}" alt="piedra">
                            <img class="player-papel img-player-option ppt papel" id="papel" src="${papel}" alt="papel">
                            <img class="player-tijera img-player-option ppt tijera" id="tijera" src="${tijera}" alt="tijera">
                        </div>
                    </div>
                </div>
            `;

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define('mi-juego', MiJuego);
}
