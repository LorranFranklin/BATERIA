document.body.addEventListener("keyup", (event) => {
  //BOTÃO DE TOQUE DE SOM
  playSound(event.code.toLowerCase()); //FUNÇÃO DE TOQUE DE SOM
});

//PEGANDO AS TECLAS APERTADAS
document.querySelector(".composer button").addEventListener("click", () => {
  //BOTÃO DE COMPOSIÇÃO
  let song = document.querySelector("#input").value; //INPUT DE COMPOSIÇÃO

  if (song !== "") {
    //SE A TECLA NÃO ESTIVER VAZIA
    let songArray = song.split(""); //CRIANDO UM ARRAY DE LETRAS
    playComposition(songArray); //FUNÇÃO DE COMPOSIÇÃO
  }
});

function playSound(sound) {
  //FUNÇÃO DE TOQUE DE SOM
  let audioElement = document.querySelector(`#s_${sound}`); //SELECIONANDO O AUDIO
  let keyElement = document.querySelector(`div[data-key="${sound}"]`); //SELECIONANDO A TECLA

  if (audioElement) {
    //SE O AUDIO EXISTIR
    audioElement.currentTime = 0; //REINICIANDO O AUDIO
    audioElement.play(); //TOCANDO O SOM
  }

  if (keyElement) {
    //SE A TECLA EXISTIR
    keyElement.classList.add("active"); //ADICIONANDO A CLASSE ACTIVE

    setTimeout(() => {
      keyElement.classList.remove("active"); //REMOVENDO A CLASSE ACTIVE
    }, 300); //TEMPO DE 300 MILISSEGUNDOS
  }
}

// NOVA FUNÇÃO
// Selecionando todas as teclas na página
const keys = document.querySelectorAll(".key");

// Adicionando um evento de clique a cada tecla
keys.forEach((key) => {
  key.addEventListener("click", () => {
    // Obtendo o código da tecla correspondente à tecla clicada
    const keyCode = key.getAttribute("data-key");

    // Chamando a função playSound com o código da tecla
    playSound(keyCode);
  });
});

function playComposition(songArray) {
  //FUNÇÃO DE COMPOSIÇÃO
  let wait = 0; //VARIAVEL DE ESPERA

  for (let songItem of songArray) {
    //CRIANDO UM ARRAY DE LETRAS
    setTimeout(() => {
      //FUNÇÃO DE ESPERA
      playSound(`key${songItem}`); //FUNÇÃO DE TOQUE DE SOM
    }, wait); //TEMPO DE ESPERA

    wait += 250; //INCREMENTANDO O TEMPO DE ESPERA
  }
}
