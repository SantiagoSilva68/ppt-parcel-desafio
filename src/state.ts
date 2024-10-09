import { navigateTo } from "./router";

type Option = "piedra" | "papel" | "tijera";

interface GameState {
  playerChoice: Option | null;
  machineChoice: Option | null;
  result: string | null;
  playerScore: number;
  machineScore: number;
}


function randomChoice(): Option {
  const choices: Option[] = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice: Option, computerChoice: Option): string {
  if (playerChoice === computerChoice) {
    return "Empate";
  }
  if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "tijera" && computerChoice === "papel") ||
    (playerChoice === "papel" && computerChoice === "piedra")
  ) {
    const playerWins = Number(localStorage.getItem("playerWins")) || 0;
    localStorage.setItem("playerWins", (playerWins + 1).toString());
    return "Ganaste";
  }
      const machineWins = Number(localStorage.getItem("machineWins")) || 0;
    localStorage.setItem("machineWins", (machineWins + 1).toString());
  return "Perdiste";
}

let gameState: GameState = {
  playerChoice: null,
  machineChoice: null,
  result: null,
  machineScore: 0,
  playerScore:0

};

function play(playerChoice: Option) {

  const juegoElement = document.querySelector('mi-juego') as any;
  if (juegoElement) {
    juegoElement.detenerCuentaRegresiva();
    console.log("Juego detenido");
    
  } else {
    console.error("El elemento 'mi-juego' no está disponible.");
  }

          const shadowRoot = juegoElement.shadowRoot;
        if (shadowRoot) {
            const countdownElement = shadowRoot.querySelector('.cuentaRegresiva') as HTMLElement;
            if (countdownElement) {
                countdownElement.style.display = 'none';
                console.log("Contador ocultado");
            }
          }
  const machineChoice = randomChoice();
  const result = getResult(playerChoice, machineChoice);

  let playerWins = parseInt(localStorage.getItem("playerWins") || "0", 10);
  let machineWins = parseInt(localStorage.getItem("machineWins") || "0", 10);

  gameState = {
    playerChoice,
    machineChoice,
    result,
    playerScore: playerWins,
    machineScore: machineWins
  };

  localStorage.setItem("playerWins", playerWins.toString());
  localStorage.setItem("machineWins", machineWins.toString());
  localStorage.setItem("gameResult", result);
  localStorage.setItem("playerChoice", playerChoice);
  localStorage.setItem("machineChoice", machineChoice);

  if (shadowRoot) {
    const playerPiedra = shadowRoot.querySelector('.player-piedra') as HTMLImageElement;
    const playerPapel = shadowRoot.querySelector('.player-papel') as HTMLImageElement;
    const playerTijera = shadowRoot.querySelector('.player-tijera') as HTMLImageElement;
    const computerPiedra = shadowRoot.querySelector('.computer-piedra') as HTMLImageElement;
    const computerPapel = shadowRoot.querySelector('.computer-papel') as HTMLImageElement;
    const computerTijera = shadowRoot.querySelector('.computer-tijera') as HTMLImageElement;
    const playerOptions = shadowRoot.querySelector('.img-player') as HTMLImageElement;
    
      if (playerChoice === "piedra") {
        playerPiedra.classList.add('center-move');
        playerPapel.style.pointerEvents = "none";
        playerTijera.style.pointerEvents = "none";
        playerPiedra.style.pointerEvents = "none";
        playerOptions.style.pointerEvents = "none";
        playerPapel.style.opacity = "0.5";
        playerTijera.style.opacity = "0.5";
      } else if (playerChoice === "papel") {
        playerPapel.classList.add('center-move');
        playerPiedra.style.pointerEvents = "none";
        playerTijera.style.pointerEvents = "none";
        playerPapel.style.pointerEvents = "none";
        playerOptions.style.pointerEvents = "none";
        playerPiedra.style.opacity = "0.5";
        playerTijera.style.opacity = "0.5";
      } else if (playerChoice === "tijera") {
        playerTijera.classList.add('center-move');
        playerPapel.style.pointerEvents = "none";
        playerPiedra.style.pointerEvents = "none";
        playerTijera.style.pointerEvents = "none";
        playerOptions.style.pointerEvents = "none";
        playerPapel.style.opacity = "0.5";
        playerPiedra.style.opacity = "0.5";
      }
    
      if (machineChoice === "piedra") {
        computerPiedra.classList.add('center-move-machine');
      } else if (machineChoice === "papel") {
        computerPapel.classList.add('center-move-machine');
      } else if (machineChoice === "tijera") {
        computerTijera.classList.add('center-move-machine');
      }
  }

  setTimeout(() => {
    if (result === "Ganaste") {
        navigateTo("/ganaste");
        displayResult(true);
    } else if (result === "Perdiste") {
        navigateTo("/perdiste");
        displayResult(false);
    } else {
        navigateTo("/empataste");
        displayResult(null);
    }

}, 1500);
  }

function displayResult(isWin: boolean | null) {
  const gameResult = localStorage.getItem("gameResult");
  const playerChoice = localStorage.getItem("playerChoice");
  const machineChoice = localStorage.getItem("machineChoice");


  const playerWins = Number(localStorage.getItem("playerWins")) || 0;
  const machineWins = Number(localStorage.getItem("machineWins")) || 0;

  const playerWinsDiv = document.querySelector('#player-score');
  const machineWinsDiv = document.querySelector('#machine-score');

  if (playerWinsDiv && machineWinsDiv) {
    playerWinsDiv.textContent = `Victorias del jugador: ${playerWins}`;
    machineWinsDiv.textContent = `Victorias de la máquina: ${machineWins}`;
}

  const reiniciarBoton = document.querySelector('#reiniciar-contador');

  if (reiniciarBoton) {
    reiniciarBoton.addEventListener('click', () => {
      localStorage.setItem("playerWins", "0");
      localStorage.setItem("machineWins", "0");

      if (playerWinsDiv && machineWinsDiv) {
      playerWinsDiv.textContent = `Victorias del jugador: 0`;
      machineWinsDiv.textContent = `Victorias de la máquina: 0`;
    }
    })
  }

  if (!gameResult || !playerChoice || !machineChoice) {
    console.error("No hay información del juego disponible");
    return;
  }

  const miJuego = document.querySelector(isWin === null ? 'juego-empataste' : isWin ? 'juego-ganaste' : 'juego-perdiste');

  if (miJuego) {
    customElements.whenDefined(isWin === null ? 'juego-empataste' : isWin ? 'juego-ganaste' : 'juego-perdiste').then(() => {
      const waitForShadowRoot = setInterval(() => {
        const shadowRoot = miJuego.shadowRoot;
        if (shadowRoot) {
          console.log("Shadow root encontrado:", shadowRoot);

          const resultDiv = shadowRoot.querySelector('#game-result');
          const playerChoiceDiv = shadowRoot.querySelector('#player-choice');
          const machineChoiceDiv = shadowRoot.querySelector('#machine-choice');
          const playerWinsDiv = shadowRoot.querySelector('#player-score');
          const machineWinsDiv = shadowRoot.querySelector('#machine-score');

          if (resultDiv && playerChoiceDiv && machineChoiceDiv && playerWinsDiv && machineWinsDiv) {
            resultDiv.textContent = `Resultado: ${gameResult}`;
            playerChoiceDiv.textContent = `Tu elección: ${playerChoice}`;
            machineChoiceDiv.textContent = `Elección de la máquina: ${machineChoice}`;
            playerWinsDiv.textContent = `Victorias del jugador: ${playerWins}`;
            machineWinsDiv.textContent = `Victorias de la máquina: ${machineWins}`;
            console.log("Datos mostrados correctamente");

            clearInterval(waitForShadowRoot);
          }
        }
      }, 100);
    }).catch((err) => {
      console.error("Error al definir el custom element:", err);
    });
  } else {
    setTimeout(() => displayResult(isWin), 100);
  }
}


function setupGame() {
  const waitForComponent = () => {
    const miJuego = document.querySelector('mi-juego');
    
    if (miJuego) {
      const observer = new MutationObserver((mutationsList, observer) => {
        const shadowRoot = miJuego.shadowRoot;
        if (shadowRoot) {
          const piedra = shadowRoot.getElementById("piedra");
          const papel = shadowRoot.getElementById("papel");
          const tijera = shadowRoot.getElementById("tijera");
          
          if (piedra && papel && tijera) {
            piedra.addEventListener("click", () => play("piedra"));
            papel.addEventListener("click", () => play("papel"));
            tijera.addEventListener("click", () => play("tijera"));
            
            observer.disconnect();
          }
        }
      });

      observer.observe(miJuego, { childList: true, subtree: true });

      const shadowRoot = miJuego.shadowRoot;
      if (shadowRoot) {
        const piedra = shadowRoot.getElementById("piedra");
        const papel = shadowRoot.getElementById("papel");
        const tijera = shadowRoot.getElementById("tijera");
        
        if (piedra && papel && tijera) {
          piedra.addEventListener("click", () => play("piedra"));
          papel.addEventListener("click", () => play("papel"));
          tijera.addEventListener("click", () => play("tijera"));
        
        }
      }
    } else {
      setTimeout(waitForComponent, 100);
    }
  };

  waitForComponent();
}

setupGame();

