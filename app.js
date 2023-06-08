// console.log("hello world!");

// console.log("hello world!");


// let const (var)

// let message = "hello world!";

// const message = "hello world!";

// message = 34;

// let name;

// name = 'hello';

// console.log(message);

// const name;
// name = 'hello';

// let message = "hello world!"; // created a variable

// this is comment

// let name = "Vova";
// let number = 23;

// name = number;

// console.log(name);

// let message = " '' ";

// const user = {
//     name: "volodymyr",
//     age: 3,
//     online: true,
//     city: undefined,
//     money: null
// }

// // user = 3;
// console.log(user);

// "username123*.."

// let name = "username";

// name = 40;
// name = true;
// name = null;

// console.log(typeof(name));

// Вивід інформації в модальне вікно

// alert("Hello");

// Зчитування інформації

// let name = prompt("Please enter your name");

// console.log("Hello new user " + name);

// console.log(`Hello new user ${name}`);

// Підтвердження інформації

// let ok = confirm("Are you ok?");

// console.log(ok);

// let name = "Volodymyr";
// let surname = "Pankiv";

// console.log("hello my name is "+ name + " and surname is "+ surname);


// 2 ** 4

// 2 ** (1/3)

// Math

// Math.pow(2,4);

// Math.sqrt(14);

// console.log("5" + 5 + 5);

// let x = 1;

// x++;

// x+=10;

// x = x + 1;

// console.log(5 == 5);

// console.log(5 == 6);

// console.log(10 < 20);

// console.log(5 <= 6);

// >=  <=

// console.log("10" == 5);

// 0 - false  1 - true

// "" - false "sf" - true

// console.log("1" == 1);

// console.log(0 == "");

// ===

// console.log(5 === "5");

// console.log(5 !== "5");

// let age = +prompt("Please enter your age");

// console.log(Number("sd20"));

// console.log(parseInt("223.3"));

// console.log(parseFloat("2.6"));
// Math.floor(10.5)



// let result = (age > 18) ? "you are adult" : "you are too young";

// console.log(result);

// let names = "Ivan Petro Vasyl";

// const names = ["Ivan", "Petro", "Vasyl"];

// console.log(names);
// console.log(names[2]);
// console.log(names[5]);

// names[1] = "Vova";

// names[3] = "Peter";

// names = "sfs";

// names[6] = "Ivanka";

// console.log(names.length);

// names.push("Taras");

// console.log(names);

// names.pop();

// console.log(names);

// if


// let age = +prompt("How old are you?");

// if(age > 18){
//     console.log("you are adult");
// } else{
//     console.log("Bad age");
// }

// if(age > 18){
//     console.log("you are adult");
// }else if(age > 10){
//     console.log("you are teen");
// }else{
//     console.log("Bad age");
// }
// 1 cat - 18-25
// 2 cat - 25-35
// 3cat - 35-60
// 4 cat - 60-90

// if(age >= 18 && age <= 25){
//     console.log("Category 1");
// } else if(age > 25 && age<=35){
//     console.log("Category2");
// } else if(age > 35 && age <= 60){
//     console.log("category 3");
// } else if(age > 60 && age <=90){
//     console.log("Category 4");
// }else{
//     console.log("You have no category");
// }

// switch

// switch(age){
//     case 18:
//         console.log("You are 18");
//         break;
//     case 20:
//         console.log("You are 20");
//         break;
//     default:
//         console.log("Wrong age");
//         break;
// }

// switch(true){
//     case age >= 18 && age <= 25:
//         console.log("Category 1");
//         break;
//     case age > 25 && age<=35:
//         console.log("Category2");
//         break;
//     case age > 35 && age <= 60:
//         console.log("category 3");
//         break;
//     default:
//         console.log("Wrong age");
//         break;
// }


// document.body.innerHTML = ""

// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// let i = 0;

// do{
//     console.log(i);
//         i++;
// }while(i <= 10);

// for, for in, for of

// for(let i = 0; i <=10; i+= 1){
//     console.log(i);
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// console.log(numbers[0]);

// for(let i = 0; i < numbers.length; i+=1){
//     console.log(numbers[i]);
// }

// for of.
// for(let element of numbers){
//     console.log(element);
// }

// for in
// for( let index in numbers){
//     console.log(numbers[index]);
// }

// break, continue

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     if(numbers[i] === 7){
//         break;
//     }
// }

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 7){
//         continue;
//     }
//     console.log(numbers[i]);
// }

// map forEach reduce find filter ...


// functions

// function myFunction(){
//     console.log("hello im a function");
// }
// myFunction();

// function multiplication(a,b){
//     console.log(a * b);
// }

// multiplication(4,5);
// multiplication(10,10);
// multiplication(5,5);
// multiplication(6,6);

// function multiplication(a,b){
//     return a * b;
// }
// let result = multiplication(5,5);

// console.log(result);
// console.log(multiplication(5,5));

// function multiplication(){
//     // console.log(arguments);
//     let result = 1;
//     for(let element of arguments){
//         // console.log(element);
//         result *= element;
//     }
//     console.log(result);
// }
// multiplication(2,3,5,7,8,9,5,3)
// function sum(){
//     // console.log(arguments);
//     let result = 0;
//     for(let element of arguments){
//         // console.log(element);
//         result += element;
//     }
//     console.log(result);
// }
// sum(2,3,5,7,8,9,5,3)

// console.log(Math.max(12,34,667,2,4));
// console.log(Math.min(12,34,667,2,4));
// console.log(Math.max(...[1,3,4,5,6]));
// console.log(Math.floor(Math.random() * 10));

// function declaration
// funDec();


// function funDec(){
//     console.log("function declaration");
// }

// // function expression
// funcExp();


// let funcExp = function(){
//     console.log("function expression");
// }

// let array = "i love js".split(" ");

// console.log(array.join("*"));

// new Set
// console.log(typeof NaN);
// console.log(isNaN("sfsfs"));
// if(isNaN("sfsfs")){
//     console.log("wrong value");
// } else {

// }

// let a = null;
// let b = 20;
// let c = a + b;

// console.log(c);

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log();
// printMe();

// try{
//     printMe();
//     console.log("hello from try section");
// }catch(exception){
//     // console.log("hello from catch section");
//     // console.log(exception.name);
//     // console.log(exception.message);
//     // console.log(exception.stack);
// }

// new RangeError("Out of range ");
// new TypeError("Wrong data type")

// throw new RangeError("Out of range ");
// new Error('some error');



// function checkNumber(){
//     try{
//         let number = prompt("Enter a number");
//         if(number > 20){
//             throw new RangeError("Number is bigger than 20");
//         }else{
//             console.log(number);
//         }
//     }catch(exception){
//         console.log(exception.message);
//     }
// }

// checkNumber();

// function checkNumber(){
//         let number = prompt("Enter a number");
//         if(number > 20){
//             throw new RangeError("Number is bigger than 20");
//         }else{
//             console.log(number);
//         }
// }

// try{
//     checkNumber();
// }catch(exception){
//     console.log(exception.message);
// }

// checkNumber();

// class AgeError{
//     constructor(message){
//         this.name = "AgeError";
//         this.message = message;
//     }
// }

// try{
//     let age = 20
//     if(age > 19){
//         throw new AgeError("Age is bigger than 19");
//     }
// }catch(exception){
//     console.log(exception.message);
// }

// try{
//     let age = 20
//     if(age > 19){
//         throw "Age is bigger than 19";
//     }
// }catch(exception){
//     console.log(exception);
// }

// forEach map reduce find filter