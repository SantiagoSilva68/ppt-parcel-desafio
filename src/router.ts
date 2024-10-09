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



import { initWelcome } from "./pages/welcome/welcome.ts";
import { initPerdiste } from "./pages/resultado/perdiste.ts";
import { initGanaste } from "./pages/resultado/ganaste.ts";
import { initReglas } from "./pages/reglas/reglas.ts";
import { initJuego } from "./pages/juego/juego.ts";
import { initEmpataste } from "./pages/resultado/empataste.ts";

// Definir el basePath
const basePath = "/ppt-parcel";

export function handleRoute(route) {
    console.log("El handle route recibió una nueva ruta:", route);

    // Eliminar el basePath de la ruta antes de procesarla
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
        contentEl.innerHTML = ""; // Limpiar el contenedor
        let routeFound = false;

        for (const r of routes) {
            // Comprobar si la ruta coincide con alguna de las rutas definidas
            if (r.path.test(newRoute)) {
                const el = r.component(); // Obtener el componente correspondiente
                contentEl.appendChild(el); // Añadir el componente al DOM
                routeFound = true;
                break; // Salir del bucle una vez que se encuentra la ruta
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
    // Construir la ruta completa con basePath
    const fullpath = `${basePath}${route}`;
    history.pushState({}, "", fullpath); // Cambiar la URL sin recargar la página
    handleRoute(fullpath); // Manejar la ruta
}

export function initRouter(params) {
    // Verificar si estamos en la ruta base y navegar a /welcome si es así
    if (window.location.pathname === basePath || window.location.pathname === `${basePath}/`) {
        navigateTo("/welcome");
    } else {
        handleRoute(window.location.pathname); // Manejar la ruta actual al cargar la página
    }

    // Manejar la navegación del historial del navegador (botones de atrás/adelante)
    window.addEventListener("popstate", () => {
        handleRoute(window.location.pathname);
    });
}
