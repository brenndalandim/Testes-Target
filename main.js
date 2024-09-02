//exercicio 1
import { testarFibo } from './ex1.js'

let inputFibo = document.querySelector('#numeroFibo')
let resultFibo = document.querySelector('#resultFibo')
let btnFibo = document.querySelector('#btnFibo')

btnFibo.addEventListener('click', () => {
    if(inputFibo.value){
        resultFibo.innerHTML = testarFibo(inputFibo.value)
    } else {
        resultFibo.innerHTML = ""
    }
})


//exercicio 2
import { procurarA } from './ex2.js'

let inputProcurarA = document.querySelector('#textoProcurarA')
let resultProcurarA = document.querySelector('#resultProcurarA')
let btnProcurarA = document.querySelector('#btnProcurarA')

btnProcurarA.addEventListener('click', () => {
    if(inputProcurarA.value){
        resultProcurarA.innerHTML = procurarA(inputProcurarA.value)
    } else {
        resultProcurarA.innerHTML = ""
    }
})


//exercicio 3
import {valorSoma} from './ex3.js';

let resultSoma = document.querySelector('#resultSoma')

resultSoma.innerHTML = `o valor da variável soma é ${valorSoma()}`