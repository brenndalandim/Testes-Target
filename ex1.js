/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

export function testarFibo(num) {
    let fib = [0, 1]
    let numTesteFib = Number(num)

    while(numTesteFib > fib[(fib.length - 1)]){
        let nextNumFib = fib[(fib.length - 1)] + fib[(fib.length - 2)]
        fib.push(nextNumFib)
    }

    if (Number.isInteger(numTesteFib) && numTesteFib >= 0){
        if (fib[(fib.length - 1)] === numTesteFib || numTesteFib == 0){
            return `${numTesteFib} faz parte da sequência de Fibonacci`
        
        } else {
            return `${numTesteFib} não faz parte da sequência de Fibonacci.<br>Os mais próximos são ${fib[(fib.length - 2)]} e ${fib[(fib.length - 1)]}`
       
        }
    } else {
        return 'Por favor insira um número inteiro válido e maior ou igual a 0'
    }
}