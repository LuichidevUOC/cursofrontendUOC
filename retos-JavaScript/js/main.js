var num1 = 0
var num2 = 0
var result = null

function getNumbers() {
  num1 = +prompt('Escriba un número del 1 al 50')
  num2 = +prompt('Escriba un segundo número del 1 al 50')
}

function isNumber(num) {
  return !isNaN(num)
}

function suma(n1, n2) {
  return n1 + n2
}

function isPrimo(numero) {
  // Casos especiales
    if(numero === 0 || numero === 1|| numero === 4) return false;
    
    for(let x=2; x < numero/2; x++){
        if(numero % x === 0) return false; 
    }

    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}

function start() {
  getNumbers()

  if(!isNumber(num1) || !isNumber(num2) || num1 <= 0 || num2 <= 0 || num1 > 50 || num2 > 50){
    alert('🚫Los numeros tienen que ser enteros positivos y menor igual a 50!')
  } else {
    result = `La suma es: ${suma(num1, num2)}\n`
    primo1 = isPrimo(num1) ? 'es primo' :  'no es primo'
    primo2 = isPrimo(num2) ? 'es primo' :  'no es primo'
    result += `el ${num1} ${primo1} y el ${num2} ${primo2}\n`
  
    alert(result);
  }
}


btn.onclick = start
