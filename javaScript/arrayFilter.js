var numeros = [1,2,3,4,5,6,7,8,9]

var resultado = numeros.filter(item => item % 2 == 0)

console.log(resultado)

var numerosFiltrados = numeros.filter((valor) => {
  return valor > 5
})
console.log(numerosFiltrados)