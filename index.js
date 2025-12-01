//===============================================================================================================
//1. Convert the string "123" to a number and add 7. (0.5 Grade)
//• Output Example: 130
let x = Number("123")
let y =x +7
console.log(y)
//===============================================================================================================
//2-Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
//• Input Example: 0
//• Output Example: "Invalid"
let z = 0
if (!z){
    console.log("inValid")
}
//===============================================================================================================
//6-Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
//• Input Example: 2
//• Output Example: “Monday”
let day = 2
switch (day) {
    case 1: 
    console.log("sunday");
    break;
    case 2: 
    console.log ("Monday");
    break;
    case 3: 
    console.log("Tuesday");
    break;
    case 4: 
    console.log("Wednesday");
  break;

    default: console.log("");
    
        break;
}
//===============================================================================================================
//10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
//• Input Example: const person = {name: 'John', age: 25}
//• Output Example: 'John is 25 years old'
const user = {
  name: 'John', 
  age:function(){
    console.log("John is 25 years old");
    
  }
  
}
user.age()
//===============================================================================================================
//4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
//• Input Example: [1, 2, 3, 4, 5]
//• Output Example: [2,4]
const arr = [1,2,3,4,5]
const even = arr.filter((ele)=>
{ return ele % 2 === 0})
console.log(even);
//===============================================================================================================
//14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
//• Input Example: name: "John", age: 30}
//• Output Example: ["name", "age"]
const obj = {
  name: "John", 
  age: 30
}
console.log(Object.keys(obj));
//===============================================================================================================
//7. Create an array of strings and return their lengths using map method (0.5 Grade)
//• Input: ["a", "ab", "abc"]
//• Output Example: [1, 2, 3]
const arr1 = ["a", "ab", "abc"]
const len = arr1.map((ele)=>
{ return ele.length}
)
console.log(len);
//===============================================================================================================
//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
//• Output Example:1, 3, 5, 7, 9
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
//===============================================================================================================
//5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
//• Input Example: [1, 2, 3], [4, 5, 6]
//• Output Example: [1, 2, 3, 4, 5, 6]
const arr2 = [1, 2, 3]
const arr3 = [4, 5, 6]
const arr4 = [...arr2,...arr3]
console.log(arr4);
//===============================================================================================================
//8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
//• Input Example: 15
//• Output Example: “Divisible by both”
function check(num){
  if (num % 3 === 0 && num % 5 === 0){
    console.log("Divisible by both");
  }
}
check(15)
//===============================================================================================================
//9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
//• Input Example: 5
//• Output Example: 25
const square = (num) => {
  return num * num
}
console.log(square(5));
//===============================================================================================================
//11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
//• Input Example: 1, 2, 3, 4, 5
//• Output Example: 15
const sum = (...nam) => {
  return nam.reduce((yyr,xxr)=>yyr+xxr) 

}
console.log(sum(1,2,3,4,5));
//===============================================================================================================
//13. Write a function to find the largest number in an array. (0.5 Grade)
//• Input Example: [1, 3, 7, 2, 4]
//• Output Example: 7
const arr5 = [1, 3, 7, 2, 4]
const max = Math.max(...arr5)
console.log(max);
//===============================================================================================================
//15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
//• Input: "The quick brown fox"
//• Output: ["The", "quick", "brown", "fox"]
const str = "The quick brown fox"
const arr6 = str.split(" ")
console.log(arr6);
//===============================================================================================================




