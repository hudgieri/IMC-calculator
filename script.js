const botao = document.querySelector('#calcular')

function imc() {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const res = document.querySelector("#resultado")


    if (nome !== '' && altura !== '' && peso !== '') {
        const valImc = (peso / (altura * altura)).toFixed(1)
        let classificacao = ''
        if (valImc < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valImc < 25) {
            classificacao = 'com peso ideal, parabéns!'
        } else if (valImc < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valImc < 35) {
            classificacao = 'com obesidade grau I.'
        } else if (valImc < 40) {
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'com obesidade grau III. Cuidado!'
        }
        res.textContent = `${nome}, seu IMC é ${valImc} e você está ${classificacao}`
    } else {
        res.textContent = `Por favor, preencha todos os campos.`
    }
}

botao.addEventListener('click', imc)
