var num1 = 0
var num2 = 0
var result = null

const RANGE_DIRECTION = {
	ASC: 'asc',
	DESC: 'desc'
}

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
	if (numero === 0 || numero === 1 || numero === 4) return false

	for (let x = 2; x < numero / 2; x++) {
		if (numero % x === 0) return false
	}

	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true
}

function isPar(num) {
	return num % 2 === 0
}

function range(n1, n2, direction) {
	let res = ''
	if (direction === RANGE_DIRECTION.ASC) {
		for (let i = n1; i <= n2; i++) {
			if (isPar(i)) res += i + ' '
		}
	}

	if (direction === RANGE_DIRECTION.DESC) {
		for (let i = n1; i >= n2; i--) {
			if (!isPar(i)) res += i + ' '
		}
	}

	return res
}

function isEqual(n1, n2) {
	return n1 === n2
}

function start() {
	getNumbers()

	if (!isNumber(num1) || !isNumber(num2) || num1 <= 0 || num2 <= 0 || num1 > 50 || num2 > 50) {
		alert(
			'🚫 Los valores introducidos tienen que ser números enteros positivos entre el 1 al 50! 🚫'
		)
	} else {
		let primo1, primo2, par1, par2
		let aux1 = '',
			aux2 = ''

		result = `La suma es: ${suma(num1, num2)}\n`
		if (!isEqual(num1, num2)) {
			primo2 = isPrimo(num2) ? 'es primo' : 'no es primo'
			par2 = isPar(num2) ? 'es par' : 'es impar'
			aux1 = `y el ${num2} ${primo2}\n`
			aux2 = `y el ${num2} ${par2}\n`
		}

		primo1 = isPrimo(num1) ? 'es primo' : 'no es primo'
		result += `el ${num1} ${primo1} ${aux1}\n`
		par1 = isPar(num1) ? 'es par' : 'es impar'
		result += `el ${num1} ${par1} ${aux2}\n`

		if (num1 < num2) result += range(num1, num2, RANGE_DIRECTION.ASC)
		else if (num1 > num2) result += range(num1, num2, RANGE_DIRECTION.DESC)
		else result += `rango: ${num1}`

		alert(result)
	}
}

btn.onclick = start
