var numeros = [1,2,3,4,5,6,7,8,9]

var total = numeros.reduce((total,numero) => {
  return total + numero
},0)

console.log(total)