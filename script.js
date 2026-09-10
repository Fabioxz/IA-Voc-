const cartas = document.querySelectorAll(".carta")

let primeiraCarta = null

let segundaCarta = null

let movimentos = 0

let bloqueado = false

let paresEncontrados = 0

function virarCarta(carta) {

    if (bloqueado) {

        return;

    }

    if (carta === primeiraCarta) {

        return;

    }

    carta.classList.add("virada")


    if (primeiraCarta === null) {

        primeiraCarta = carta

        return;

    }

    segundaCarta = carta

    movimentos++;

    verificarPar();

}


function verificarPar() {

    if (primeiraCarta.dataset.img === segundaCarta.dataset.img) {

        console.log("Par encontrado!")

        paresEncontrados++

        if (paresEncontrados === 8 ) {
            document.getElementById("mensagem-vitoria").style.display = "block";
        }

        primeiraCarta = null

        segundaCarta = null

    } 
    
    else {

        bloqueado = true

        setTimeout(function () {

            primeiraCarta.classList.remove("virada")

            segundaCarta.classList.remove("virada")

            primeiraCarta = null

            segundaCarta = null

            bloqueado = false

        }, 1000)

    }

}


cartas.forEach(function (carta) {

    carta.addEventListener("click", function() {

        virarCarta(carta)

    })

})

function reiniciarJogo() {
    location.reload();
}