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

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

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

// forEach map reduce find filtesr

// function getLastElements(arr, n) {
//     if (n <= 0) {
//       return [];
  
//     } else if (n >= arr.length) {
//       return arr[arr.length - 1];
//     } else {
//       return arr.slice(-n);
//     }
//   }
  
//   console.log(getLastElements([1, 2, 3, 4, 5], 2));

// const numbers = [1,2,3,4,5,6];


// const newNumber = numbers.map(function(element){
//     // console.log(element);
//     // if(element === 5){
//     //     // continue
//     //     return;
//     // }
//     // console.log(element);
//     return element + 1;
// })
// console.log(newNumber);

// function toTitleCase(str) {
//     const titleCase = str
//       .split(' ')
//       .map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join(' ');
  
//     return titleCase;
//   }

// const user = {
//     name: "user1",
//     age: 2,
//     surname: "userSurname",
//     wife: {
//         name: "wife1",
//         age: 25
//     },
//     favouriteBooks: ["Don kihot", "dorian gray"],
//     showName: function(){
//         console.log(this.name);
//     }

// }

// console.log(user.name);
// console.log(user["name"]);

// user.name = "newName";
// user.city = "Lviv";

// // delete user.age;

// console.log(user.wife.name);
// user.showName();
// const obj = {}

// const obj1 = new Object();

// class

// class Student{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//    static someVariable = 23;

//     showName(){
//         console.log(this.name);
//     }
// }

// const student1 = new Student("Ivan", "Ivanenko");

// console.log(student1.name);
// student1.name = "newIvan";
// const student2 = new Student("Ivan", "Ivanenko");
// const student3 = new Student("Ivan", "Ivanenko");



// // console.log(student1);
// student1.showName();

// let title = document.querySelector(".title"); 
// let title = document.querySelectorAll(".title")[1]; 


// console.log(title);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstChild);l

// console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);


// let block = document.querySelector(".block");

// console.log(block.innerHTML);
// block.innerHTML = "<h2> new tag</h2>";
// console.log(block.outerHTML);
// block.outerHTML = "<h1> new tag</h1>";
// console.log(block.tagName);

// block.className = "newBlock";
// block.id = "blockId";
// setAtrribute
// block.setAttribute("id", "blockId");

// let newElement = document.createElement("h1");

// newElement.innerHTML = "title from JS";

// newElement.className = "title";
// newElement.classList.add("title");

// console.log(newElement);
// block.append(newElement);
// block.prepend(newElement);

// console.log(block.hasAttribute("class"));
// block.remove();


// let title = document.querySelector(".title");

// title.style.color = "green";
// title.style.backgroundColor = "rgba(123,45,66, 0.5)";

// reduce

// const numbers = [1,2,3,4,6,7,8,9,10,11,12,13,14];

// let sum = 0;

// for(let i = 0; i< numbers.length; i++){
//     sum += numbers[i];
// }


// console.log(sum);

// let result = numbers.reduce(function(sum, element){
//     return sum + element;
// },0)

// console.log(result);
// console.log(window);

// let newWindow = window.open("https://www.google.com", "", "height=300, width=300, left=200,top=200");

// newWindow.moveTo(400,400);
// newWindow.resizeTo(500,500);
// setTimeout(function(){
    // newWindow.close();
    // console.log("hello");
// },5000);

// console.log(window.innerWidth);
// document.querySelector('.title').onclick = function(){
//     console.log("click working from js");
// }

// eventListener

// let title = document.querySelector('.title');

// function someFunction(){
//     console.log("some message");
// }

// title.addEventListener("click", function(){
//     console.log("my event working with event listener");
// })
// title.addEventListener("click", someFunction);
// const btn = document.querySelector('.btn');
// let title = document.querySelector('.title');
// let inp = document.querySelector('.inp');

// btn.addEventListener("click", function(event){
//     // console.log("it works");
//     // console.log(event.type);
//     // console.log(event.target);
//     event.target.style.color = "green";
// })
// btn.addEventListener("click", function(event){
//     title.style.color = "red";
// })
// btn.addEventListener("click", function(event){
//     console.log(inp.value);
//     inp.value = "";
// })

// const sayHello = function(){
//     console.log("hello");
// }

// sayHello();

// const sayHello = () => {
//     console.log("hello");
// }

// sayHello();

// const sum = function(a,b){
//     return a + b;
// }

// const sum = (a,b) => a + b;


// console.log(sum(2,2));

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.map(element =>{
//     console.log(element);
// })

// Math.min(...numbers);
// console.log("1");

// setTimeout(()=>{
//     console.log("2");
// });

// console.log("3");

// function sayHello(){
//     return "hello from function";
// }


// console.log(sayHello());

// function sayHello(){
//     return new Promise((resolve, reject) => {
//         resolve("hello from function");
//     })
// }

// console.log(sayHello());
// sayHello().then((result) => console.log(result));

// function sum(a,b){
//     return new Promise((resolve,reject) => {
//         if(a > 0 && b > 0){
//             resolve(a + b);
//         }else{
//             reject("a and b must be greater than 0");
//         }
//      })
// }

// async function myFunction(){
//     let result  = await sum(2,2);
//     // console.log(result);
//     return result;
// }

// myFunction().then(result => console.log(result));

// sum(-2,-2).then(result => console.log(result))
//         .catch(error => console.log(error));

// sum(-2,-2).then(result => {
//                     console.log(result)
//                 },
//                 error =>{
//                     console.log(error);
//                 }
// )


// sum(-2,-2).then(result => result + 10)
//         .then(result => result + 10)
//         .then(result => console.log(result))
//         .catch(error =>{
//             console.log(error);
//             return sum(3,3);
//         })
//         .then(result => console.log(result));


// console.log("hello hello");

// const fs = require('fs');

// fs.readFile("text.txt", "utf-8", function(err,data){
//     console.log(data);
// });

// const {array} = require("./mymodule.js");

// console.log(array);

const http = require('http');

const one = 1;

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>hello ${one}</h1>
        <h1>hello 2</h1>
        <h1>hello 3</h1>
    `);
    response.end();
}).listen(8000);

console.log("server is running at http://localhost:8000");