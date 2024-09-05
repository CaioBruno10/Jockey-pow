const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImg = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png']

/*

(R) ROCK - Pedra
(P) Paper - Papel
(S) Scisoors - Tesoura

Pedra - Ganha de tesoura, perde para papel
Papel -  Ganha de pedra, perde para tesoura
Tesoura - Ganha de papel, perde para pedra 


*/

const winner = {

    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SP: "Computador",
    SP: "Você"

}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.innerHTML = "Espere"

    userResult.src = computerResult.src = 'images/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImg[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImg.length)
        computerResult.src = computerSrcImg[randomNumber]

        const userValue = ['R', 'P', 'S'] [userIndex]
        const computerValue = ['R', 'P', 'S'] [randomNumber]
        const userComputerResult = userValue + computerValue 
        const finalResult = winner[userComputerResult]
        console.log (finalResult)

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou'

    }, 2000);
}



optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})

