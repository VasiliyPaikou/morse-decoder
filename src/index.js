
const morse = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	' ': ' ',
};

function decode(expr) {
	let arr = []
	for (let i = 0; i < expr.length; i = i + 10) {
		arr.push(expr.slice(i, i + 10))
	};
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === '**********') {
			arr[i] = ' '
		} else {
			arr[i] = Number(arr[i]).toString()
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(/10/g, '.').replace(/11/g, '-')

	}
	for (key in morse) {

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === key) {
				arr[i] = morse[key]
			}
		}
	}
	return arr.join('')
}

module.exports = {
	decode
}
