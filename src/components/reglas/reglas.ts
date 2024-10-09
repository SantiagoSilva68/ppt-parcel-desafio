import { navigateTo } from "../../router";
const tijera = new URL("../../images/tijera.png", import.meta.url);
const piedra = new URL("../../images/piedra.png", import.meta.url);
const papel = new URL("../../images/papel.png", import.meta.url); 

export function reglas() {
    class MisReglas extends HTMLElement {   
        constructor() {
            super();
            this.render();
        }

        render() {
            const shadow = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            style.innerHTML = `
                .contenedor-general{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }
                @media (max-width: 768px) {
                .contenedor-general {
                justify-content: space-evenly;
                }
                }
                .titulo{
                    font-size: 40px;
                    font-family: "Special Elite", system-ui;
                    font-weight: 800;
                    font-style: normal;
                    font-stretch: expanded;
                    margin: 0px;
                    text-align:center; 
                    color: black;
                    width: 300px;
                    height: 280px;
                    margin-top: 200px;
                }
                     @media (max-width: 768px) {
                  .titulo {
                  margin-top:40px
                    }
                  }
                .contenedor-imagenes{
                    display: flex;
                    gap:65px;
                }
                @media (max-width: 768px) {
                    .contenedor-imagenes {
                    gap:20px;
                    }
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
                .boton:hover {
                    transform: scale(1.05);
                }
                .ppt{
                    width: 100%;
                    height: 181px;
                    transform: translateY(35px);
                }
            `;

            const div = document.createElement('div');
            div.classList.add('root');

            div.innerHTML = `
                <div class="contenedor-general">
                <div id="mensaje-reinicio" style="display: none; color: green; font-weight: bold;"></div>
                    <h1 class="titulo">
                        Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
                    </h1>
                    <button class="boton">¡Jugar!</button>
                    <div class="contenedor-imagenes">
                        <img class="ppt piedra-game" id="piedrachoice" src="${piedra}" alt="piedra">
                        <img class="ppt" src="${papel}" alt="papel">
                        <img class="ppt" src="${tijera}" alt="tijera">
                    </div>
                </div>
            `;


        //     const botonReinicarResultados = shadow.getElementById('reiniciar-contador');
            
        //     if (botonReinicarResultados) {
        //     botonReinicarResultados.addEventListener('click', () => {
        //         console.log("reiniciar");
        //         localStorage.setItem("playerWins", "0");
        //         localStorage.setItem("machineWins", "0");
        
        //         const playerWinsDiv = shadow.getElementById('player-wins');
        //         const machineWinsDiv = shadow.getElementById('machine-wins');
            
        //         if (playerWinsDiv && machineWinsDiv) {
        //             playerWinsDiv.textContent = `Victorias del jugador: 0`;
        //             machineWinsDiv.textContent = `Victorias de la máquina: 0`;
        //         }
        //         const mensajeReinicio = document.querySelector('#mensaje-reinicio') as HTMLElement;
        //         if (mensajeReinicio) {
        //           mensajeReinicio.textContent = "Contadores reiniciados correctamente!";
        //           mensajeReinicio.style.display = "block";
        //           setTimeout(() => {
        //             mensajeReinicio.style.display = "none";
        //           }, 1000);
        //         }
        //     });
        // }

            const boton = div.querySelector('.boton');
            if (boton) {
                boton.addEventListener('click', () => {
                    navigateTo('/juego');
                });
            } 

            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }

    customElements.define('mis-reglas', MisReglas);
}
