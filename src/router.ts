


import { initWelcome } from "./pages/welcome/welcome.ts";
import { initPerdiste } from "./pages/resultado/perdiste.ts";
import { initGanaste } from "./pages/resultado/ganaste.ts";
import { initReglas } from "./pages/reglas/reglas.ts";
import { initJuego } from "./pages/juego/juego.ts";
import { initEmpataste } from "./pages/resultado/empataste.ts";

const basePath = "/ppt-parcel-desafio";

export function handleRoute(route) {
    console.log("El handle route recibió una nueva ruta:", route);

    const newRoute = route.replace(basePath, "");
    
    const routes = [
        {
            path: /\/welcome/,
            component: initWelcome,
        },
        {
            path: /\/reglas/,
            component: initReglas,
        },
        {
            path: /\/perdiste/,
            component: initPerdiste,
        },
        {
            path: /\/ganaste/,
            component: initGanaste,
        },
        {
            path: /\/juego/,
            component: initJuego,
        },
        {
            path: /\/empataste/,
            component: initEmpataste,
        }
    ];
    
    const contentEl = document.querySelector(".content");
    
    if (contentEl) {
        contentEl.innerHTML = "";
        let routeFound = false;
        
        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const el = r.component();
                contentEl.appendChild(el);
                routeFound = true;
                break;
            }
        }
        
        if (!routeFound) {
            console.error("Ruta no encontrada:", newRoute);
        }
    } else {
        console.error("No se encontró el elemento con la clase 'content'.");
    }
}

export function navigateTo(route) {
    const fullpath = `${basePath}${route}`;
    history.pushState({}, "", fullpath);
    handleRoute(fullpath);
}

export function initRouter(params) {

    if (window.location.pathname === basePath || window.location.pathname === `${basePath}/`) {
        navigateTo("/welcome");
    } else {
        handleRoute(window.location.pathname);
    }
    
    window.addEventListener("popstate", () => {
        handleRoute(window.location.pathname);
    });
}

// import { initWelcome } from "./pages/welcome/welcome.ts";
// import { initPerdiste } from "./pages/resultado/perdiste.ts";
// import { initGanaste } from "./pages/resultado/ganaste.ts";
// import { initReglas } from "./pages/reglas/reglas.ts";
// import { initJuego } from "./pages/juego/juego.ts";
// import { initEmpataste } from "./pages/resultado/empataste.ts";

// export function handleRoute(route) {
//     console.log("El handle route recibió una nueva ruta:", route);
    
//     const routes = [
//         {
//             path: /\/welcome/,
//             component: initWelcome,
//         },
//         {
//             path: /\/reglas/,
//             component: initReglas,
//         },
//         {
//             path: /\/perdiste/,
//             component: initPerdiste,
//         },
//         {
//             path: /\/ganaste/,
//             component: initGanaste,
//         },
//         {
//             path: /\/juego/,
//             component: initJuego,
//         },
//         {
//             path: /\/empataste/,
//             component: initEmpataste,
//         }
//     ];

//     const contentEl = document.querySelector(".content");

//     if (contentEl) {
//         contentEl.innerHTML = ""; 
//         let routeFound = false;
//         for (const r of routes) {
//             if (r.path.test(route)) {
//                 const el = r.component(); 
//                 contentEl.appendChild(el); 
//                 routeFound = true;
//                 break; 
//             }
//         }
//         if (!routeFound) {
//             console.error("Ruta no encontrada:", route);
//         }
//     } else {
//         console.error("No se encontró el elemento con la clase 'content'.");
//     }
// }

// const basePath = "/parcel-desafio-ppt";
// export function navigateTo(route) {
//     const fullpath = `${basePath}${route}`;
//     history.pushState({}, "", fullpath);
//     handleRoute(fullpath);
// }

// export function initRouter(params) {
//     if (window.location.pathname === "/parcel-desafio-ppt") {
//         navigateTo("/welcome");
//     } else {
//         handleRoute(window.location.pathname);
//     }

//     window.addEventListener("popstate", () => {
//         handleRoute(window.location.pathname);
//     });
// }

// console.log("PRUEBA");
// console.log("PRUEBA");
// console.log("PRUEBA");