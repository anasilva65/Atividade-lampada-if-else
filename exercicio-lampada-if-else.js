const lampada = document.querySelector("#lampada")
function interruptor(botao) {
    console.log(botao)
    console.log(botao.value)
    console.log(botao.textContent)

    if (botao.value === "ligar") {

        lampada.src = "img/lampada-ligada.jpg"
        lampada.alt = "lampada ligada"
        botao.textContent = "Desligar"
        botao.value = "desligar"
    } else {
        lampada.src = "img/lampada-desligada.jpg"
        lampada.alt = "lampada desligada"
        botao.textContent = "Ligar"
        botao.value = "ligar"   
    }
}