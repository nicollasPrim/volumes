let resposta = document.getElementById('resposta')

function vol_cilindro(){
    let altura = Number(document.getElementById('altura').value)
    let raio = Number(document.getElementById('raio').value)

    console.log("alt = " + altura + "raio = " + raio)

    let volume = (Math.PI) * raio * raio * altura
    console.log("volume = " + volume)

    resposta.innerHTML = "O volume do cilindro é "+volume.toFixed(2) + "m3"
    resposta.style.fontSize = "2.5rem"
    resposta.style.fontWeight = "bold"
    resposta.style.transition = "1s"
}