/*nome: caractere
numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Digite nome:")
leia (nome)
escreval ("Digite numero:")
leia (numero)

escreval (nome, ":", numero)

Fimalgoritmo*/

var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + ":" + numero