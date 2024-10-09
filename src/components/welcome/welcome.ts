import { navigateTo } from "../../router";
const tijera = new URL("../../images/tijera.png", import.meta.url);
const piedra = new URL("../../images/piedra.png", import.meta.url);
const papel = new URL("../../images/papel.png", import.meta.url); 

export function welcomeText() {
    class MyWelcomeField extends HTMLElement {   
        constructor() {
            super();
            this.render();
        }
        render() {
        const shadow = this.attachShadow({ mode: 'open' });

        const syle = document.createElement('style');
        syle.innerHTML = `
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
            font-size: 80px;
            font-family: "Special Elite", system-ui;
            font-weight: 800;
            font-style: normal;
            font-stretch: expanded;
            margin: 0px;
            text-align:center; 
            color: #009048;
            width: 308px;
            height: 280px;
            margin-top: 180px;
        }
            @media (max-width: 768px) {
            .titulo {
            margin-top:40px
            }
            }
            .titulo span.piedra, .titulo span.tijera {
                    display: block; /* Hace que 'Piedra' y 'Tijera' estén en líneas separadas */
            }
            .inline {
             display: inline-block; /* Permite que 'Papel' y 'O' estén en la misma línea */
             width:100%;
            }
            .cero{
                color:#91CCAF;
                display: inline-block;
            }
            .contenedor-imagenes{
            display: flex;
            gap:65px;
            }
            @media (max-width: 768px) {
            .contenedor-imagenes {
            gap: 20px;
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
        `
        const div = document.createElement('div');
        div.classList.add('root');


        div.innerHTML = `
        <div class="contenedor-general">
        <h1 class="titulo">
        <span class="piedra">Piedra</span> 
        <span class="inline">Papel <span class="cero">ó</span></span>
        <span class="tijera">Tijera</span>
            </h1>
                <button class="boton">Empezar</button>
                <div class="contenedor-imagenes">
                <img class="ppt" src="${piedra}" alt="piedra">
                <img class="ppt" src="${papel}" alt="papel">
            <img class="ppt" src="${tijera}" alt="tijera">
                </div>
        </div>
        `
        const boton = div.querySelector('.boton');
        if (boton) {
            boton.addEventListener('click', () => {
                navigateTo('/reglas');
            });
        } else {
            console.error('No se encontró el botón en el DOM');
        }

        shadow.appendChild(syle);
        shadow.appendChild(div);
    }
    }
    customElements.define('welcome-text', MyWelcomeField);
}

