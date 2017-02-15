
// Declare the variable companyName.
var comapnyName;


// Declare the variable goodTeamMember and assign it your name as a value.
var goodTeamMember = 'Natesh Kumar';
console.log(goodTeamMember);


// Assign the variable number1 to the value 3 and assign the variable number2 to the value 5. Print the multiplication of number1 and number2 to the console.
var number1 = 3;
var number2 = 5;
console.log(number1*number2);


// What does the following code print to the console ? Justify your answers
var country = "India";
country = "USA";
country = "Singapore";
console.log(country);


// Create two variables one with value as your name and second having value as your college name. Print the result to the console.
var name = 'Natesh kumar';
var college = 'Thapar University';
console.log(name +" is a student of "+ college);


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


// 3. a) Create two Date Objects. One with your birthdate and one with your friend’s. If your friend is older than you, output should be his/her name.
//  If you are output should be your name. If you both are of same age output both names.


var mybday = {
    name : "Natesh",
    date : new Date(Date.parse('13-10-1991'))
  };
var herbday = {
  name : "bilal",
  date : new Date(Date.parse('04-09-1990'))
};

if (mybday.date.getTime() > herbday.date.getTime()) {
  console.log(herbday.name);
} else if (mybday.date.getTime() < herbday.date.getTime()){
  console.log(mybday.name);
} else{
  console.log(mybday.name.getTime()+" "+herbday.name.getTime());
}



// b) Write a javascript function which takes alphabet  as an argument and return whether  alphabet is vowel or consonant using switch case

function check(char)
{
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
/*check('U');*/

var c = prompt("enter any alphabet");
check(c);




// 4. a) Write javascript program to print pascal triangle.

function pasc(n){
var result = [[1]];
for (var row = 1; row < n; row++){
    for (var col = 1; col <= row; col++){
        result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
    }
}
return result;
}
pasc(10)
for (var i = 0; i < result.length; i++){
    document.write(result[i]+"<br>");
}

// b) Write javascript program to multiply two matrices.

// method 1
function multiplyMatrices(m1, m2) {
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

var m1 = [[1,2],[3,4]]
var m2 = [[5,6],[7,8]]

var mResult = multiplyMatrices(m1, m2)

/*In Google Chrome and Firefox you can do:*/

console.table(mResult) /* it shows the matrix in a table */


// 5. a) Write a JavaScript function reverses the non negative number. Note: Use function statement syntax;
// eg.
// input: 1234
// Output : 4321
// input: “AppDirect” Output : “tceriDppA”

function reverse(s) {

  var string1 = '';
  for (var i = s.length - 1; i >= 0; i--)
  {
    string1 = string1 + s[i];
  }
  /*return string1;*/
  console.log(string1);
}

reverse('Natesh');


// b) Write a JavaScript function that dermines string is palindrome or not. Note: Use function expression syntax;
// e.g.
// input: "test" output : true input: "ram" output: false*/

function palindrome(word)
{
  for(var i=0; i<=((word.length-1)/2); i++)
    {
      if(word.charAt(i) != word.charAt((word.length-1)-1))
      {
      console.log("false");
      }
        else{
           console.log("true");
        }
      }
}
palindrome("ufhg");


// 6. Create student object using object literal. Put all your details in it (e.g. name, address, department, mobile, etc). Assign a method to it which you have written in Q 5. b) (copy
// paste that function) and call this method to reverse your name. Print output to console.

var object 
{
  name = 'Cherry';
  address = 'A1003 Trillium',
  department = 'Engineering',
  mobile = '9501701955'
  
  rename = reverse(name);
  console.log(rename);
}
  function reverse(s) {
  var string1 = '';
  for (var i = s.length - 1; i >= 0; i--)
  {
    string1 = string1 + s[i];
  }
  return string1;
}


// 7. a) Write program to find numbers in string using regular expression. Input: I am 25 years old. I was born in 1991.
// output : [ 25, 1991]
// Note: Type of all elements of output array should be number

var sentence = "I am 21 years old. I was born in 1995";
var m = sentence.match(/[0-9]+/g);
console.log(m);

/*b) Write a fuction to test valid email addresses using regular expression.*/

var pattern = "[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)* @[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
 
function validate(s)
{
  s = natesh28kumar@gmail.com;
  alert(s.match(pattern)); 
    return s.match(pattern);                                                                                        
}



