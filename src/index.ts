import { welcomeText } from "./components/welcome/welcome";
import { reglas } from "./components/reglas/reglas";
import { juego } from "./components/juego/juego";
import { initRouter } from "./router";
import { perdiste } from "./components/resultado/perdiste";
import { ganaste } from "./components/resultado/ganaste";
import { empataste } from "./components/resultado/empataste";

function main(){
    document.addEventListener ('DOMContentLoaded', () => {
        welcomeText();      
        juego();
        ganaste();
        perdiste();
        reglas();
        empataste();
    })
}
main();

(function () {
    const contenedorGeneral = document.querySelector(".contenedor-general");
    initRouter(contenedorGeneral)
    })()
