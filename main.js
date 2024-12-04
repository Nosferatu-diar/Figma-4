// Exercise ---2---

// let str = 'Hello world'
// let NewStr = ''
// for (let i = str.length - 1; i >= 0; --i) {
//    NewStr += str[i]
// }
// console.log(NewStr);

// Exercise ---5---

// let str = 'anna'
// let NewStr = ''
// for (let i = str.length - 1; i >= 0; --i) {
// 	NewStr += str[i]
// }
// if (NewStr === str) {
// 	console.log(true)
// } else {
// 	console.log(false)
// }

// Exercise ---7---

// let str = '       Hello Anna What is your going      '
// let str2 = str.trim()
// let count = 0
// for (let i = 0; i < str2.length; ++i) {
// 	if (str2[i].toUpperCase() === str2[i] && str2[i] !== ' ') {
// 		count++
// 	}
// }
// console.log(count)

// Exercise ---9--- Masalani sharti chunarsiz

// let str = 'abcz'
// let char = ''
// let nextChar = ''
// let res = ''
// for (let i = 0; i < str.length; i++) {
// 	char = str[i]
// 	if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
// 		nextChar = String.fromCharCode(char.charCodeAt() + 1)

// 		if (char === 'z') {
// 			nextChar = 'a'
// 		}
// 		if (char === 'Z') {
// 			nextChar = 'A'
// 		}

// 		res += nextChar
// 	} else {
// 		res += char
// 	}
// }
// console.log(res)


// --------------------------------------

// new constructor 
// fuctory function


