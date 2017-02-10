// Declare the variable companyName.

var comapnyName;


// Declare the variable goodTeamMember and assign it your name as a value.

var goodTeamMember = 'Natesh Kumar';
console.log(goodTeamMember);


// Assign the variable number1 to the value 3 and assign the variable number2 to the value 5. Print the multiplication of number1 and number2 to the console.

var number1 = 3;
var number2 = 5;
console.log(number1 * number2);


// What does the following code print to the console ? Justify your answers

var country = "India";
country = "USA";
country = "Singapore";
console.log(country);

//output:Singapore
//it will overwrite the previous value of country.

// Create two variables one with value as your name and second having value as your college name. Print the result to the console.

var name = 'Natesh kumar';
var company = '“AppDirect”';
console.log(name + " is an employee of " + company);


// 2. For following questions try to execute the code in browser, observe the output , read about types in javascript and  then answer.*/    

// a) What does the following statement print to the console?
console.log(typeof("Ram"));

// output: String


// b) What does the following statement print to the console? 
console.log(typeof(false));

// output:boolean


// c) What does the following statement print to the console? 
console.log(typeof(-23) === "number");

// output:Equals


// d) What does the following statement print to the console? 
console.log(typeof(typeof(33)));

//output: String
// 3. a) Create two Date Objects. One with your birthdate and one with your friend’s. If your friend is older than you, output should be his/her name.
//  If you are output should be your name. If you both are of same age output both names.


var natesh = new Date('1991/10/13');
var bilal = new Date('1990/07/19');
if (natesh.getTime() > bilal.getTime()) {
	console.log('Natesh');
} else if (natesh.getTime() < bilal.getTime()) {
	console.log('Bilal');
} else {
	console.log('Natesh' + ' ' + 'Bilal');
}


// b) Write a javascript function which takes alphabet  as an argument and return whether  alphabet is vowel or consonant using switch case


function check(char) {
	switch (char) {
		case 'A':
		case 'a':
			console.log("vowel");
			break;
		case 'E':
		case 'e':
			console.log("vowel");
			break;
		case 'I':
		case 'i':
			console.log("vowel");
			break;
		case 'O':
		case 'o':
			console.log("vowel");
			break;
		case 'U':
		case 'u':
			console.log("vowel");
			break;
		default:
			console.log("consonant");
	}
}
var c = prompt("enter any alphabet");
check(c);


//another way to write this code

function check(char) {
	switch (char) {
		case 'A':
		case 'a':

		case 'E':
		case 'e':

		case 'I':
		case 'i':

		case 'O':
		case 'o':

		case 'U':
		case 'u':
			console.log("vowel");
			break;
		default:
			console.log("consonant");
	}
}
var c = prompt("enter any alphabet");
check(c);


// 4. a) Write javascript program to print pascal triangle.

function pasc(n) {
	var result = [];
	result[0] = [1];
	result[1] = [1, 1];
	for (var row = 2; row < n; row++) {
		result[row] = [1];
		for (var col = 1; col <= row - 1; col++) {
			result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
			result[row].push(1);
		}
	}
	return result;
}

for (var i = 0; i < pasc(10).length; i++) {
	document.write(pasc(10)[i] + "<br>");
	console.log(pasc(10)[i] + "<br>");
}


// b) Write javascript program to multiply two matrices.


function MatrixMultiplication(m1, m2) {
	var result = [];
	for (var i = 0; i < m1.length; i++) {
		result[i] = [];
		for (var j = 0; j < m2[0].length; j++) {
			var sum = 0;
			for (var k = 0; k < m1[0].length; k++) {
				sum += m1[i][k] * m2[k][j];
			}
			result[i][j] = sum;
		}
	}
	return result;
}

var m1 = [
	[3, 1],
	[4, 1]
]
var m2 = [
	[4, 2],
	[3, 2]
]
var mResult = MatrixMultiplication(m1, m2)
console.table(mResult)


// 5. a) Write a JavaScript function reverses the non negative number. Note: Use function statement syntax;
// eg.
// input: 1234
// Output : 4321
// input: “AppDirect” Output : “tceriDppA”

reverse('Natesh');

function reverse(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--)
		o += s[i];
	console.log(o);

}


// b) Write a JavaScript function that determines string is palindrome or not. Note: Use function expression syntax;
// e.g.
// input: "test" output : true input: "ram" output: false*/

function isPalindrome(s) {
	var len = s.length;
	// definition clauses 1. and 2.
	if (len < 2) {
		return true;
	}
	// note: len >= 2
	// definition clause 3.
	if (s[0] != s[len - 1]) {
		return false;
	}
	var t = s.substr(1, len - 2);
	return isPalindrome(t);
}
var pal = isPalindrome("kanak");
console.log(pal);

// 6. Create student object using object literal. Put all your details in it (e.g. name, address, department, mobile, etc). Assign a method to it which you have written in Q 5. b) (copy
// paste that function) and call this method to reverse your name. Print output to console.

var object = {
	'name': 'Rohit',
	'address': 'Trillium',
	'department': 'Engineering',
	'mobile': '9646395550',

	'reverse': function(s) {
		var string1 = '';
		for (var i = s.length - 1; i >= 0; i--) {
			string1 = string1 + s[i];
		}
		return string1;
	}
}
console.log(object.reverse(object.name));



// 7. a) Write program to find numbers in string using regular expression. Input: I am 25 years old. I was born in 1991.
// output : [ 25, 1991]
// Note: Type of all elements of output array should be number

var sentence = "I am 21 years old. I was born in 1995";
var m = sentence.match(/[0-9]+/g);
console.log(m);

/*b) Write a fuction to test valid email addresses using regular expression.*/

function validate(s) {

	var m = s.match(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/);
	if (m) {
		console.log("matched");
	} else {
		console.log("not matched");
	}
}
validate('natesh28kumar@gmail.com');



// 8. Implement function verify(text) which verifies whether parentheses within text are correctly nested. You need to consider three kinds: (), [], <>.

var brac = checkbracket('{}[()]');
if (brac) {
	console.log('Matched');
}

function checkbracket(str) {
	var head = 0,
		stack = [],
		str_ln = str.length;
	brackets = {
		"(": ")",
		"{": "}",
		"[": "]"
	};

	for (var i = 0; i < str_ln; i++) {
		if (brackets[str[i]]) {
			stack[head++] = str[i];
		} else {
			if (brackets[stack[head - 1]] === str[i]) {
				head--;
			} else {
				return 0;
			}
		}
		if (head < 0) return 0;
	}
	return head === 0 ? 1 : 0;
}