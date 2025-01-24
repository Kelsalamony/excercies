// let client = {
//   age: 20,
//   phone: 1023078501,
//   name: "khaled",
// };
// console.log(typeof client);
// console.log(client.age);

// let friends = ["ahmed", "khaled", "moahmed"];
// console.log(friends);

// console.log(hello);
// hello.innerHTML = "Khlaed";
// console.log("khaled");

// let titleName = "Elzero",
//   descTile = "Elzero Web School",
//   DateTime = "25 /10 ";

// let container = `<div>
//   <h3>Hello ${titleName}</h3>
//   <p>${descTile}</p>
//   <span>${DateTime}</span>
//   </div>`;
// container = container.repeat(4);
// document.write(container);

// let numberONe = 10,
//   numberTwo = 20;

// console.log(numberONe + "" + numberTwo);
// console.log(typeof ("numberONe" + "numberTwo"));
// console.log(`${numberONe}${numberTwo}`);
// console.log(typeof `${numberONe}${numberTwo}`);
// console.log(numberTwo + "\n" + numberONe);
// console.log(`${numberTwo}
// ${numberONe}`);

// console.log(
//   "`" +
//     "I am " +
//     " " +
//     "In" +
//     " \n" +
//     "\\\\" +
//     "\n" +
//     "Love" +
//     " " +
//     "\\\\" +
//     '"""' +
//     " ''' " +
//     "\n" +
//     "++" +
//     "With" +
//     "++"
// );
// console.log(`\`i am In
// \\\\
// Love \\\\ """ '''
// ++ With ++ `);

// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// console.log("_" + `${a}_${b}`.repeat(4));

// let numOne = prompt("please enter first number "),
//   numTwo = prompt("please enter the second number ");
// let sum;
// sum = +numOne + +numTwo;
// document.getElementById("result").innerHTML = sum;

// let firstName = prompt("please enter first name "),
//   lastName = prompt("please enter the second name ");
// let fullName = `Hello ${firstName} ${lastName}`;
// console.log(fullName);

// let theTitle = "Elzero",
//   theDescription = "Elzero Web School",
//   theDate = "25/10";
// let container = `<div>
//   <h3>Hello ${theTitle}</h3>
//   <p>${theDescription}</p>
//   <span>${theDate}</span>
//   </div>`;
// container = container.repeat(4);
// document.getElementById("result").innerHTML = container;

// let num = prompt("please enter number ");
// result = num / 2;
// console.log(`the Half of the ${num} is ${result} `);

// let mark = prompt("please enter mark ");
// let result = mark >= 50 ? "pass" : "fail";
// console.log(result);

// let mark = prompt("please enter mark ");
// if (mark >= 50) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }
// let num1 = parseInt(prompt("please enter the first number ")),
//   num2 = parseInt(prompt("please enter the first number ")),
//   num3 = parseInt(prompt("please enter the first number ")),
//   sum = num1 + num2 + num3;
// console.log(sum);

// let n = parseInt(prompt("please enter the number of your marks ")),
//   marks,
//   average,
//   sum = 0;
// for (let i = 1; i <= n; i++) {
//   marks = parseInt(prompt(`please enter the mark number ${i}`));
//   sum = sum + marks;
// }
// average = sum / n;
// console.log(average);

// let a = 10;
// let b = "20";
// let c = 80;

// // console.log(++a + +b++ + +c++ - +a++);
// // console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let n = +prompt("Please enter the number of your marks ."),
//   mark,
//   average,
//   sum = 0;
// for (let i = 1; i <= n; i++) {
//   mark = +prompt(`please enter the mark ${i}`);
//   sum += mark;
// }
// average = sum / n;
// console.log(`The average of your mark is ${average}`);
// console.log(average >= 50 ? "Congratulations, you passed!" : "Unfortunately, you failed.");
// let nums = [10, 3, 4, 1, 2,15,18];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < 5) {
//     console.log(nums[i]);
//   }
// }
/*
  Number Challenge
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.trunc(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(parseInt(d));

// let a = "Khale_d_Mohame_d_Mansou_r";

// console.log(a.split("_"));

// let a = +prompt("please enter the number one");
// b = +prompt("please enter the number two");
// c = +prompt("please enter the number three");
// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   }
// } else {
//   if (b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

// let a = +prompt("Please enter the first num");
// let b = +prompt("Please enter the the second num");
// let temp = a;
// console.log(+a + "\n" + +b);
// console.log((a = b));
// console.log((b = temp));

// let length = +prompt("Please enter the length of rectangle");
// let daigonal = +prompt("Please enter the diagonal of rectangle");
// let width = Math.sqrt(daigonal ** 2 - length ** 2);
// area = length * width;
// console.log(`the area of rectangle is : ${area.toFixed(3)}`);

// let base = +prompt("Please entaer the base of traingle ");
// let height = +prompt("Please enter the height of traingle");
// area = (base * height)/2;
// console.log(`the area of the traingle is : ${area}`);

// let a = +prompt("Please entaer the daiameter of circle ");
// let b = +prompt("Please entaer the daiameter of circle ");
// let c = +prompt("Please entaer the daiameter of circle ");
// let p = (a + b + c) / 2;
// numerator = a * b * c;
// denominator = 4 * Math.sqrt(p * (p - a) * (p - b) * (p - c));
// area = Math.PI * (numerator / denominator) ** 2;
// console.log(`the area of the circle is : ${area.toFixed(3)}`);

// let age = +prompt("Enter the age");

// for (;(age>15||age<45); ) {
//   console.log("Invalid");
//   age = +prompt("Enter the age again"); // Re-prompting if the age is invalid
// }

// console.log("Valid");

// let price = +prompt(`enter the price of the product `);
// let discount = prompt(`plese choose true or false `);
// if (discount === `true`) {
//   let discountAmount = +prompt(`please enter the value of the discountAmount`);
//   price -= discountAmount;
//   console.log(`price is : ${price}`);
// } else {
//   console.log(`price is : ${price}`);
// }

/*
  If Condition Challenge
*/

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// Write Previous Condition With Ternary If Syntax
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

/*
  Switch Challenge
*/

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
// let job = "engineer";
// let salary = 0;

// switch (job) {
//   case "Manger":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
//     console.log("job not found");
// }
/*
  If Challenge
*/

let holidays = 10;
let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
// if (holidays == 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 1 || holidays == 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 5) {
//   money = 0;
//   console.log(`My Money is ${money}`);
// } else {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }
// console.log(100 == "100"); // true
// console.log(100< 1000); // true
// console.log(110 > 100 || 10 > 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 === typeof +"-40"); // true
// console.log(typeof 10 === typeof -"-40"); // true
// console.log(+"10" === 10); // true
// console.log(20 > false); // true
// let num1 = 10;
// let num2 = 20;

// console.log(10<20); // true
// console.log(20>10); // true
// console.log(typeof num1 === typeof num2); // true

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a < b || a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
// Test Case 1

// let num = 9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"
// let num1 = 9;
// if (num1 < 10) {
//   console.log(`00${num1}`);
// }
// let num2 = 20;
// if (num2 > 10 && num2 < 100) {
//   console.log(`0${num2}`);
// }
// let num3 = 110;
// if (num3 >= 100) {
//   console.log(num3);
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }
// if (num1 !== str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if (num1 !== str2) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }
// if (typeof str == typeof str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// Edit What You Want Here

// let num1 = 5;
// let num2 = 11;
// let num3 = 5;
// let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let day = "   friday  ";
// reslut =day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
// console.log(reslut);

// let day = prompt("please enter your day ");
// reslut = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
// // let day = "Saturday";
// // let day = "Sunday";
// // Output => "No Appointments Available"
// switch (reslut) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log(`No Appointments Available`);
//     break;
//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;
//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;
//   default:
//     console.log("Its Not A Valid Day");
// }
// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// n = +prompt(`Pease enter the number`);
// if (n % 2 != 0) {
//   for (i = n; i >= 1; i--) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// } else {
//   for (i = n - 1; i >= 1; i--) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }
// let start = n % 2 !== 0 ? n : n - 1;
// for (i = start; i >= 1; i--) {
//       if (i % 2 != 0) {
//        console.log(i);
//      }
// }
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// for (i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// let freinds = ["ahmed", "mohamed", "sayed"];
// let result=freinds.slice();
// console.log(result);

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
// my.reverse();
// my.shift();
// my.shift();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// my.shift();
// my.pop();
// console.log(my.slice(zero, counter)); // ["Elham", "Mazero"]
// let result = my[0].slice(0, my[0].indexOf("h")) + my[1].slice(my[1].indexOf("z"))

// console.log(result);//ElhamMazero

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.splice(num)
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.pop()
// friends.shift()
// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo);
// finalArr.sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// let num = +prompt(`Please enter the num`);
// let powerNum = +prompt(`Please enter the power num`);
// // for (i = 2; i <= powerNum; i++) {
//   console.log(`${num} ^ ${powerNum} = ${num ** powerNum}`);
// }

// let grade = +prompt(`Please enter the grade`);
// grade < 100 && grade >= 90
//   ? console.log("A")
//   : grade < 89 && grade >= 80
//   ? console.log("b")
//   : grade < 79 && grade >= 70
//   ? console.log("c")
//   : grade < 69 && grade >= 60
//   ? console.log("d")
//   : grade < 59 && grade >= 50
//   ? console.log("e")
//   : console.log("F");
// let list = [
//   "Ahmed",
//   100,
//   1000,
//   "Mazero",
//   "Elham",
//   "Osama",
//   10,
//   14,
//   "Gamal",
//   "Ameer",
//   1,
//   2,
//   3,
// ];
// let onlyNames = [];
// for (i = 0; i < list.length; i++) {
//   if (typeof list[i] === "number") {
//     onlyNames.push(list[i]);
//   }
// }
// console.log(onlyNames);

/*
  Loop
  - Nested Loops
*/

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 2;
// for (i = 0; i <= showCount; i++) {
//   document.write(`${products[i]}<br/>`);
//   for (j = 0; j < colors.length; j++) {
//     document.write(`${colors[j]}<br/>`);
//   }
// }

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(i=start;i<=end;i+=start){
//   if(i===exclude){
//     continue;
//   }
//   console.log(i);

// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start = 10;
// let end = 0;
// let stop = 3;
// for (i = start; i >= stop; i--) {
//   if (i === start) {
//     console.log(start);
//   } else {
//     console.log(`${end}${i}`);
//   }
// }
// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03

// let index = 10;
// let jump = 2;

// for (;;) {
//   if(index<=jump) break;
// console.log(index);
// index-=jump
// }

// // Output
// // 10
// // 8
// // 6
// // 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (i = 0; i < friends.length; i++) {
//   if (friends[i][0] === letter.toUpperCase()) continue;
//   console.log(`"${i} => ${friends[i]}`);
// }
// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];
// let showCount = +prompt(`please enter the number of admin/s you have `);
// let mainMessage = `<div style="padding-left:20px">We Have ${showCount} Admins</div> <br/>`;
// let adminContent = ``;
// let employeesContent = ``;
// for (i = 0; ; i++) {
//   if (myAdmins[i] === "Stop") break;
//   adminContent += `<div style="padding-left:20px"><hr>
//   <p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>
//   <p style="font-size: 25px; font-weight:bold">Team Members:</p>
//   </div> `;
//   let memberCount = 1;
//   for (j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === myAdmins[i][0]) {
//       adminContent += `<div style="padding-left:20px">
//       <p>- ${memberCount} ${myEmployees[j]}</p>
//       </div>`;
//       memberCount++;
//     }
//   }
// }
// document.write(mainMessage);
// document.write(adminContent);

// function sayHello(userName) {
//   document.write(`Hello ${userName}`);
// }
// sayHello(`Khaled`);

// function sumTwoNumber(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let content = ``;
// for (let i = 0; i < 4; i++) {
//   content += `${sumTwoNumber(4, 4)} <br>`;
// }
// document.write(content);

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// greet(`khaled`);

// function sum(num1, num2) {
//   result = num1 + num2;
//   console.log(`the sum of ${num1} + ${num2} = ${result}`);
//   return sum;
// }
// sum(2,3);

// function isEven(num) {
//   if (num % 2 == 0) {
//     console.log(`true`);
//   } else {
//     console.log(`false`);
//   }
// }
// isEven(4);
// isEven(189);

// function findLargest(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return `the ${num1} is the largest number `;
//   } else if (num2 > num1 && num2 > num3) {
//     return `the ${num2} is the largest number `;
//   } else if (num3 > num1 && num3 > num2) {
//     return `the ${num3} is the largest number `;
//   } else {
//     return `the ${num1} , ${num2} and ${num3} Are Eaual`;
//   }
// }
// console.log(findLargest(390, 390, 390));

// function repeatWords(word, times) {
//   let result = ``;
//   for (let i = 1; i <= times; i++) {
//     result += `${word} `;
//   }
//   return result;
// }
// document.write(repeatWords(`Khaled`, 3));

// function sumArray(arr) {
//   let sum = 0;
//   if (Array.isArray(arr)) {
//     for (i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//   } else {
//     return `your input it is not valid`;
//   }
//   return sum;
// }
// console.log(sumArray([2, 3, 5]));
// console.log(sumArray("Hello"));

// function genrateYears(yearToStart, yearToEnd, counter) {
//   content = ``;
//   for (let i = yearToStart; i <= yearToEnd; i += counter) {
//     content += `${i} <br>`;
//   }
//   return content;
// }
// document.write(genrateYears(2000, 2030, 6));

// function genrateYears(yearToStart, yearToEnd, exclude , counter) {
//   content = ``;
//   for (let i = yearToStart; i <= yearToEnd; i +=counter) {
//     if (i === exclude) continue;
//     content += `${i} <br>`;
//   }
//   return content;
// }
// document.write(genrateYears(2000, 2030, 2030 ,5));

// console.log(4+4+" "+" 5");
// function sayHello(userName, age) {
//   if (age === undefined) {
//     age = `please enter your info`;
//     return document.write(`Hello ${userName} Your Age is ${age}`);
//   } else {
//     return document.write(`Hello ${userName} Your Age is ${age}`);
//   }
// }
// sayHello(`fff`);

// function sayHello(userName=`Unknown`,age = `unknown`) {
//     document.write(`Hello ${userName} Your Age Is ${age}`);
//   }
//   sayHello(undefined , 13);

// function sumNumbers(numbers = []) {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// let numberLimit = +prompt("Please enter your limit number ");
// let number = [];
// for (i = 1; i <= numberLimit; i++) {
//   number.push(+prompt(`Please enter number ${i}`));
// }
// document.write(sumNumbers(number));

// let yourname = prompt("please enter your name"),
//   age = +prompt(`please enter your age`),
//   hisHourPrice = +prompt("please enter your Hour Price"),
//   skillLimit = +prompt("please enter you number of skill you want to add");
// skills = [];
// for (i = 1; i <= skillLimit; i++) {
//   skills.push(prompt(`please enter your skill ${i}`));
// }
// function portofolio(name="unkown", age="unkown", hisHourPrice="unkown", ...skills) {
//   let content = `<div style="padding-left:20px">
// <h1>Hello ${name}</h1>
// <p>Your age is ${age}</p>
// <p>Your price in one hour is $${hisHourPrice}</p>
// <p>Your skills is : ${skills}</p>
//   </div>`;
//   return document.write(content);
// }
// portofolio(yourname, age, hisHourPrice, ...skills);

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
// function showDetails(a, b, c) {
//   let result =
//     typeof a === "number" && typeof b === "string" && typeof c === "boolean"
//       ? `Hello ${b}, Your Age Is ${a}, ${c ? "Available" : "Not Available"}`
//       : typeof b === "number" && typeof a === "string" && typeof c === "boolean"
//       ? `Hello ${a}, Your Age Is ${b}, ${c ? "Available" : "Not Available"}`
//       : typeof c === "number" && typeof b === "string" && typeof a === "boolean"
//       ? `Hello ${b}, Your Age Is ${c}, ${a ? "Available" : "Not Available"}`
//       : typeof c === "string" && typeof a === "number" && typeof b === "boolean"
//       ? `Hello ${c}, Your Age Is ${a}, ${b ? "Available" : "Not Available"}`
//       : "Invalid input"; // Default message when no condition matches
//   return console.log(result);
// }
function showDetails(a, b, c) {
  let name, age, availability;
  
  if (typeof a === "string" && typeof b === "number" && typeof c === "boolean") {
    name = a;
    age = b;
    availability = c;
  } else if (typeof b === "string" && typeof a === "number" && typeof c === "boolean") {
    name = b;
    age = a;
    availability = c;
  } else if (typeof c === "string" && typeof b === "number" && typeof a === "boolean") {
    name = c;
    age = b;
    availability = a;
  } else if (typeof c === "string" && typeof a === "number" && typeof b === "boolean") {
    name = c;
    age = a;
    availability = b;
  } else {
    return console.log("Invalid input");
  }

  let result = `Hello ${name}, Your Age Is ${age}, ${availability ? "Available" : "Not Available"}`;
  return console.log(result);
}

showDetails(38, "Osama", true);  // Output: "Hello Osama, Your Age Is 38, Available"
showDetails("Osama", 38, false); // Output: "Hello Osama, Your Age Is 38, Not Available"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, Available"
showDetails(38, "Osama", false); // "Hello Osama, Your Age Is 38, Not Available"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, Available"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, Not Available"

// let a = 38;
// if (typeof a === "number") {
//   console.log(a);
// }
// let b = true;
// if (typeof b === "boolean") {
//   console.log(b); // true
// }
// let c = "khaled";
// if (typeof c === "string") {
//   console.log(c);
// }
// let a = 38;
// let b = "khaled";
// let c = 25;
// typeof a || typeof b || typeof c === "string"
//   ? console.log(a)
//   : console.log(no);