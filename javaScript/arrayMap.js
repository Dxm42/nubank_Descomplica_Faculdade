var numeros = [1,2,3,4,5,6,7,8,9]

var num = numeros.map((valor) => {return valor * 2})

console.log(num)


var funcionarios = [
  {nome:'Luiz', idade:30},
  {nome:'Davi', idade:20},
  {nome:'Arthur', idade:25},
  {nome:'Lucas', idade:50}
]

 nomes = funcionarios.map((pessoa) => {
 return pessoa.nome
})

console.log('nomes',nomes)