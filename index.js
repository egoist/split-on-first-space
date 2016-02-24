'use strict'

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string')
	}
	str = str.trim()
	var indexOfSpace = str.indexOf(' ')
	if (indexOfSpace > -1) {
		return [str.substr(0, indexOfSpace), str.substr(indexOfSpace + 1)]
	}
	return [str]
}
