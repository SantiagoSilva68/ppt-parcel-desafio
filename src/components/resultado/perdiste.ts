const perdistee = new URL("../../images/resultado.png", import.meta.url);
import { navigateTo } from "../../router";
export function perdiste() {
    class HasPerdido extends HTMLElement {   
        constructor() {
            super();
            this.render();
        }
        render() {
        const shadow = this.attachShadow({ mode: 'open' });

        const syle = document.createElement('style');
        syle.innerHTML = `
            .contenedor-general{
            height: 100vh;
            background-color: rgba(137, 73, 73, 0.60);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;  
            }
            .contenedor-score{
            width: 30vh;
            height: 40vh;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: solid 6px black;
            gap: 20px;
            }
            .boton {
            width: 336px;
            height: 87px;
            background-color: #007cff;
            color: white;
            font-family: "Odibee Sans", sans-serif;
            font-size: 32px;
            font-weight: 500;
            padding: 10px 40px;
            border: 10px solid #0000A0;
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
                }
            .contenedor-elementos{
            width: 300px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            gap: 30px;
            }
            .imagen-perdiste{
            width: 300px;
            height: 300px;
            }
            .score{
            font-size:30px;
            }
            .player-choice, .machine-choice, .result{
            font-size: 30px;}
            .boton-reinicio{
            }
            .botones{
            display:flex;
            gap:10px;
            }
            @media (max-width: 768px) {
            .botones {
            flex-direction: column;
            margin-bottom: 20px;
            }
            .contenedor-general {
            
            }
            .boton {
            width: 300px;
            }
            .imagen-perdiste {
            width: 200px;
            height: 200px;
            }
            .contenedor-elementos {
            gap:15px;
            }
            .contenedor-score {
            width: 300px;
            gap:0;
            height: 230px;
            }
            }
        `
        const div = document.createElement('div');
        div.classList.add('root');


        div.innerHTML = `
            <div class="contenedor-general">
            <div class="contenedor-elementos">
            <img class="imagen-perdiste" src="${perdistee}"></img>
            <div class="contenedor-score">
            <div class="player-choice" id="player-choice"></div>
            <div class="machine-choice" id="machine-choice"></div>
            <div class="result" id="game-result"></div>
            <div class="score" id="player-score"></div>
            <div class="score" id="machine-score"></div>
            </div>
            <div class="botones">
            <button class="boton">Volver a Jugar</button>
            <button class="boton boton-reinicio"id="reiniciar-contador">Reiniciar Contadores</button>
            </div>
            </div>
            </div>
        `
        shadow.appendChild(syle);
        shadow.appendChild(div);

        const botonReinicarResultados = shadow.getElementById('reiniciar-contador');
        console.log(botonReinicarResultados);
        

        document.addEventListener('DOMContentLoaded', () => {
            
        })
        if (botonReinicarResultados) {
        botonReinicarResultados.addEventListener('click', () => {
            console.log("reiniciar");
            localStorage.setItem("playerWins", "0");
            localStorage.setItem("machineWins", "0");
    
            const playerWinsDiv = shadow.getElementById('player-wins');
            const machineWinsDiv = shadow.getElementById('machine-wins');
        
            if (playerWinsDiv && machineWinsDiv) {
                playerWinsDiv.textContent = `Victorias del jugador: 0`;
                machineWinsDiv.textContent = `Victorias de la máquina: 0`;
            }

            const mensajeReinicio = document.querySelector('#mensaje-reinicio') as HTMLElement;
            
            if (mensajeReinicio) {
              mensajeReinicio.textContent = "Contadores reiniciados correctamente!";
              mensajeReinicio.style.display = "block";
              setTimeout(() => {
                mensajeReinicio.style.display = "none"; 
              }, 1000);
            }
        });
    }

        const boton = div.querySelector('.boton');
            if (boton) {
                boton.addEventListener('click', () => {
                    window.location.href = "/reglas";
                });
            } 
    }
    }
    customElements.define('juego-perdiste', HasPerdido);
}