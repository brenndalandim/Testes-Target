/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

*/

export function procurarA(texto) {
    let listaLetras = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split('')

    let resultado = listaLetras.filter((e) => e == 'a')

    return `"${texto}" tem ${resultado.length} letras "A"`
}