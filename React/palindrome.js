function palindrome(palindromeString) {
	let random = palindromeString
	let len = palindromeString.length //5
	let roundedVal = parseInt(Math.ceil(palindromeString.length / 2))
	let mid = roundedVal - 1 //2
	let result = true
	for (let char = 0; char <= mid; char++) {
		if (!(palindromeString[char] == palindromeString[len - 1-i])) {
			result = false
			break
		}
		len--
	}
	// re
	console.log(result)
	return random
}
console.log(palindrome("racecar"))
// console.log(palindrome("abccea"))
