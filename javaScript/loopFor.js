var numeros = [12,23,34,45,56,67,78,89,90]

numeros.forEach(valor => console.log(valor))

var total = 0

numeros.forEach(valor => {
 return total += valor
})

console.log('resultado',total)