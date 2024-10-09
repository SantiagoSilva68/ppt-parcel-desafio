function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t=globalThis,n={},i={},o=t.parcelRequire1975;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire1975=o);var a=o.register;a("27Lyk",function(t,n){e(t.exports,"register",()=>i,e=>i=e);var i,o=new Map;i=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("a5GLL",function(t,n){e(t.exports,"navigateTo",()=>m),e(t.exports,"initRouter",()=>g);var i=o("kXr83"),a=o("dQ0V6"),r=o("5pDEx"),s=o("2b1GK"),c=o("356BS"),l=o("eDs3D");let d="/ppt-parcel-desafio";function p(e){console.log("El handle route recibió una nueva ruta:",e);let t=e.replace(d,""),n=[{path:/\/welcome/,component:i.initWelcome},{path:/\/reglas/,component:s.initReglas},{path:/\/perdiste/,component:a.initPerdiste},{path:/\/ganaste/,component:r.initGanaste},{path:/\/juego/,component:c.initJuego},{path:/\/empataste/,component:l.initEmpataste}],o=document.querySelector(".content");if(o){o.innerHTML="";let e=!1;for(let i of n)if(i.path.test(t)){let t=i.component();o.appendChild(t),e=!0;break}e||console.error("Ruta no encontrada:",t)}else console.error("No se encontró el elemento con la clase 'content'.")}function m(e){let t=`${d}${e}`;history.pushState({},"",t),p(t)}function g(e){window.location.pathname===d||window.location.pathname===`${d}/`?m("/welcome"):p(window.location.pathname),window.addEventListener("popstate",()=>{p(window.location.pathname)})}}),a("kXr83",function(t,n){e(t.exports,"initWelcome",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <welcome-text></welcome-text>
    `,e}}),a("dQ0V6",function(t,n){e(t.exports,"initPerdiste",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <juego-perdiste></juego-perdiste>
    `,e}}),a("5pDEx",function(t,n){e(t.exports,"initGanaste",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <juego-ganaste></juego-ganaste>
    `,e}}),a("2b1GK",function(t,n){e(t.exports,"initReglas",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <mis-reglas></mis-reglas>
    `,e}}),a("356BS",function(t,n){e(t.exports,"initJuego",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <mi-juego></mi-juego>
    `,e}}),a("eDs3D",function(t,n){e(t.exports,"initEmpataste",()=>i);function i(){let e=document.createElement("div");return e.innerHTML=`
        <juego-empataste></juego-empataste>
    `,e}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.3ecb30fd.js","223Fd","tijera.3c583404.png","g0sFE","piedra.0760a792.png","eKOYG","papel.0a924bf5.png","dqgAY","resultado.5074e4bf.png","l8w5A","resultadoGanaste.1156514e.png","1pr56","empataste.436163ea.png"]'));var r=o("a5GLL"),s={};s=new URL("tijera.3c583404.png",import.meta.url).toString();const c=new URL(s);var l={};l=new URL("piedra.0760a792.png",import.meta.url).toString();const d=new URL(l);var p={};p=new URL("papel.0a924bf5.png",import.meta.url).toString();const m=new URL(p);var r=o("a5GLL");const g=new URL(s),h=new URL(l),u=new URL(p),x=new URL(s),f=new URL(l),v=new URL(p);var r=o("a5GLL"),y={};y=new URL("resultado.5074e4bf.png",import.meta.url).toString();const w=new URL(y);var b={};b=new URL("resultadoGanaste.1156514e.png",import.meta.url).toString();const E=new URL(b);var L={};L=new URL("empataste.436163ea.png",import.meta.url).toString();const S=new URL(L);document.addEventListener("DOMContentLoaded",()=>{(function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
                    display: block; /* Hace que 'Piedra' y 'Tijera' est\xe9n en l\xedneas separadas */
            }
            .inline {
             display: inline-block; /* Permite que 'Papel' y 'O' est\xe9n en la misma l\xednea */
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
        `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
        <div class="contenedor-general">
        <h1 class="titulo">
        <span class="piedra">Piedra</span> 
        <span class="inline">Papel <span class="cero">\xf3</span></span>
        <span class="tijera">Tijera</span>
            </h1>
                <button class="boton">Empezar</button>
                <div class="contenedor-imagenes">
                <img class="ppt" src="${d}" alt="piedra">
                <img class="ppt" src="${m}" alt="papel">
            <img class="ppt" src="${c}" alt="tijera">
                </div>
        </div>
        `;let i=n.querySelector(".boton");i?i.addEventListener("click",()=>{(0,r.navigateTo)("/reglas")}):console.error("No se encontró el botón en el DOM"),e.appendChild(t),e.appendChild(n)}}customElements.define("welcome-text",e)})(),function(){class e extends HTMLElement{constructor(){super(),this.cuentaRegresiva=3,this.victoriasJugador=parseInt(localStorage.getItem("victoriasJugador")||"0"),this.victoriasMaquina=parseInt(localStorage.getItem("victoriasMaquina")||"0"),this.render()}empezarCuentaRegresiva(){let e=this.shadowRoot?.querySelector("#countdownNumber"),t=this.shadowRoot?.querySelector(".rotating-circle");this.intervalId=window.setInterval(()=>{if(this.cuentaRegresiva>0){this.cuentaRegresiva--,e.textContent=this.cuentaRegresiva.toString();let n=(3-this.cuentaRegresiva)*360;t&&(t.style.transform=`rotate(${n}deg)`)}else clearInterval(this.intervalId),window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio"},1e3)}detenerCuentaRegresiva(){clearInterval(this.intervalId)}connectedCallback(){this.empezarCuentaRegresiva()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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

                /* Nuevo div que simula la rotaci\xf3n */
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

                /* A\xf1adimos esta clase cuando se haga la elecci\xf3n */
                .center-move {
                    animation: move-to-center 0.5s ease forwards;
                }
                .center-move-machine {
                    animation: move-to-center-machine 0.5s ease forwards;
                }           `,e.appendChild(t);let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
                <div class="game-options">
                    <div class="game-pptj">
                        <div class="img-computer">
                            <img class="computer-piedra ppt computer" id="computerImg" src="${f}" alt="piedra">
                            <img class="computer-papel ppt computer" id="computerImg" src="${v}" alt="papel">
                            <img class="computer-tijera ppt computer" id="computerImg" src="${x}" alt="tijera">
                        </div>
                        <div class="cuentaRegresiva">
                            <div class="circle">
                                <!-- Div que simula la rotaci\xf3n -->
                                <div class="rotating-circle"></div>
                                <!-- N\xfamero de la cuenta regresiva -->
                                <div id="countdownNumber">${this.cuentaRegresiva}</div>
                            </div>
                        </div>
                        <div class="img-player">
                            <img class="player-piedra img-player-option ppt piedra-game" id="piedra" src="${f}" alt="piedra">
                            <img class="player-papel img-player-option ppt papel" id="papel" src="${v}" alt="papel">
                            <img class="player-tijera img-player-option ppt tijera" id="tijera" src="${x}" alt="tijera">
                        </div>
                    </div>
                </div>
            `,e.appendChild(t),e.appendChild(n)}}customElements.define("mi-juego",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
            .contenedor-general{
            height: 100vh;
            background-color: rgba(136, 137, 73, 0.60);
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
        `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
            <div class="contenedor-general">
            <div class="contenedor-elementos">
            <img class="imagen-perdiste" src="${E}"></img>
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
        `,e.appendChild(t),e.appendChild(n);let i=e.getElementById("reiniciar-contador");console.log(i),i&&i.addEventListener("click",()=>{console.log("reiniciar"),localStorage.setItem("playerWins","0"),localStorage.setItem("machineWins","0");let t=e.getElementById("player-wins"),n=e.getElementById("machine-wins");t&&n&&(t.textContent="Victorias del jugador: 0",n.textContent=`Victorias de la m\xe1quina: 0`),window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio";let i=document.querySelector("#mensaje-reinicio");i&&(i.textContent="Contadores reiniciados correctamente!",i.style.display="block",setTimeout(()=>{i.style.display="none"},1e3))});let o=n.querySelector(".boton");o&&o.addEventListener("click",()=>{window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio"})}}customElements.define("juego-ganaste",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
        `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
            <div class="contenedor-general">
            <div class="contenedor-elementos">
            <img class="imagen-perdiste" src="${w}"></img>
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
        `,e.appendChild(t),e.appendChild(n);let i=e.getElementById("reiniciar-contador");console.log(i),document.addEventListener("DOMContentLoaded",()=>{}),i&&i.addEventListener("click",()=>{console.log("reiniciar"),localStorage.setItem("playerWins","0"),localStorage.setItem("machineWins","0");let t=e.getElementById("player-wins"),n=e.getElementById("machine-wins");t&&n&&(t.textContent="Victorias del jugador: 0",n.textContent=`Victorias de la m\xe1quina: 0`),window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio";let i=document.querySelector("#mensaje-reinicio");i&&(i.textContent="Contadores reiniciados correctamente!",i.style.display="block",setTimeout(()=>{i.style.display="none"},1e3))});let o=n.querySelector(".boton");o&&o.addEventListener("click",()=>{window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio"})}}customElements.define("juego-perdiste",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
            `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
                <div class="contenedor-general">
                <div id="mensaje-reinicio" style="display: none; color: green; font-weight: bold;"></div>
                    <h1 class="titulo">
                        Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
                    </h1>
                    <button class="boton">\xa1Jugar!</button>
                    <div class="contenedor-imagenes">
                        <img class="ppt piedra-game" id="piedrachoice" src="${h}" alt="piedra">
                        <img class="ppt" src="${u}" alt="papel">
                        <img class="ppt" src="${g}" alt="tijera">
                    </div>
                </div>
            `;let i=n.querySelector(".boton");i&&i.addEventListener("click",()=>{(0,r.navigateTo)("/juego")}),e.appendChild(t),e.appendChild(n)}}customElements.define("mis-reglas",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
            .contenedor-general{
            height: 100vh;
            background-color: rgba(42, 124, 252, 0.60);
;
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
            .botones{
            display: flex;
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
        `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
            <div class="contenedor-general">
            <div class="contenedor-elementos">
            <img class="imagen-perdiste" src="${S}"></img>
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
        `,e.appendChild(t),e.appendChild(n);let i=e.getElementById("reiniciar-contador");console.log(i),i&&i.addEventListener("click",()=>{console.log("reiniciar"),localStorage.setItem("playerWins","0"),localStorage.setItem("machineWins","0");let t=e.getElementById("player-wins"),n=e.getElementById("machine-wins");t&&n&&(t.textContent="Victorias del jugador: 0",n.textContent=`Victorias de la m\xe1quina: 0`);let i=document.querySelector("#mensaje-reinicio");window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio",i&&(i.textContent="Contadores reiniciados correctamente!",i.style.display="block",setTimeout(()=>{i.style.display="none"},1e3))});let o=n.querySelector(".boton");o&&o.addEventListener("click",()=>{window.location.href="https://santiagosilva68.github.io/ppt-parcel-desafio"})}}customElements.define("juego-empataste",e)}()}),function(){let e=document.querySelector(".contenedor-general");(0,r.initRouter)(e)}();
//# sourceMappingURL=index.3ecb30fd.js.map
