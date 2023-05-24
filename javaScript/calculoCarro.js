//  O custo de um carro novo  ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). supondo que o percentual do distribuidor seria de 28% e os impostos de 45%, escrever um algoritmo para ler  o custo de fábria de um carro, calcular e escrever o custo final ao consumidor.

var custoFabrica = 40000
var porDist
var porImp
var custoFinal

porDist = custoFabrica * 28/100
porImp = custoFabrica * 45/100
custoFinal = custoFabrica + porDist + porImp

console.log(custoFinal)