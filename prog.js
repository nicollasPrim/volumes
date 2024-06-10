let resposta = document.getElementById('resposta')

function resultado(){
    let comp = Number(document.getElementById('comp').value)
    let larg = Number(document.getElementById('larg').value)
    let altura = Number(document.getElementById('altura').value)

    let volume = comp * larg * altura

    resposta.innerHTML = "O volume do seu paralelepípedo é: "+volume + "m3"
    resposta.style.fontSize = "2.5rem"
    resposta.style.fontWeight = "bold"
    resposta.style.transition = "1s"
}