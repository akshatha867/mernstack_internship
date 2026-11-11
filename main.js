let a=10;
console.log(a);
a=50;
var b=20;
b=30;
const pie=3.14
console.log(a)
console.log(b)
console.log(pie)

// defining data types
let str="This is text";
str="Hello";
let price=99.52;
price=85.23;
let isPrime=true;
isPrime=false;
let num=10;
num=85;
let name=null;
name=10;
let notFound=undefined;
notFound="found"

let und;
console.log(und);

console.log("This is string:",str);
console.log("This is float:",price);
console.log("This is boolean:",isPrime);
console.log("This is number:",num);
console.log("This is null:",name);
console.log("This is undefined:",notFound);

// arithmetic operators
let num1=10;
let num2=20;

let firstName="Akshatha";
let lastName="G";
let fullName=firstName+ " " +lastName;
console.log(fullName);

console.log("10"+num1);

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

// comparison operators
let number1=10;
let number2="10";

if(number1>number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1<number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1>=number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1<=number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1==number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1===number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1!=number2){
    text="true";
}else{
    text="false";
}
console.log(text);

if(number1!==number2){
    text="true";
}else{
    text="false";
}
console.log(text);

let email;
if(!email){
    console.log("required");
    
}

//ternary operator
let result=!email?"Error":"Success";
console.log(result);

let d=10;
let e=30;
d>e?console.log("true"):console.log("false");

// Logical Operators
let mail="akse@gmail.com";
let password="rdbcbd";

if(!mail && !password){
    console.log("Please fill fields");
}else{
    console.log("it is success");
    
}
if(!mail || !password){
    console.log("Please fill fields");
}else{
    console.log("it is success");
    
}

// array
let numbers=[10,20,30,40];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

let fruits=["mango","kiwi","apple"];
let element;
for(let i=0;i<fruits.length;i++){
    element=fruits[i];
    console.log(element);
}

//array methods join
let seasons=["summer","winter","rainy"];
console.log("Before join method",seasons);
let joinMethod=seasons.join("|");
console.log("After join method",joinMethod);

//pop method
let numeric=[10,20,30,40];
console.log("Before pop",numeric);
console.log("Removed item is",numeric.pop());
console.log("Array after pop",numeric);

let items=["phone","laptop","watch"];
console.log("Before pop",items);
console.log("Removed item is",items.pop());
console.log("Array after pop",items);

//push method
console.log("Before push",items);
console.log("Added item is",items.push("Airpods"));
console.log("After push",items)

// object
let person={
    name:"riya",
    age:20,
    address:"moodbidri",
    skills:["java","javascript","php"],
    gender:"female",
    grade:9.4
};
console.log(person);
console.log(person.gender,person.age);
console.log(person.skills);
console.log(person.skills[2]);

// date funtion
let date=new Date();
console.log(date);
const specific=new Date(2026, 5 ,15,10,30,0);
console.log(specific);

// functions
//function without params and argument
function sum(){
    let a=10;
    let b=20;
    console.log(a+b);
}
sum();
//function with params and argument
function subtract(a,b){
    console.log(a-b);
}
subtract(40,20);

//function with params and without argument
function multiply(a=10,b=20){
    console.log(a*b);
}
multiply();

//array function
let multiplication=(x,y)=>{
    console.log(x*y);
}
multiplication(2,3);

let div=(m,n)=>{
    console.log(m/n);
}
div(10,5);

//switch
// let day="sunday";
switch(new Date().getDay()){
    case "Monday":
        console.log("It's monday");
         break;
    case "Tuesday":
        console.log("It's tuesday");
        break;
    case "Wednesday":
        console.log("It's wednesday");
        break;
    case 6:
        console.log("It's saturday");
        break;
    default:
        console.log("It's not any day");
}

//String methods
let string="Hello World";
console.log("Before replace:",string);

let replaced=string.replace("World","John");
console.log("After replaced:",replaced);

let slice=string.slice(0,2);
console.log("Slice:",slice);

let search=string.search("World");
console.log(search);

let split=string.split("Hello");
console.log("Split:",split);

//try and catch block
try{
    console.logs();
}catch(error){
    console.log("Something is wrong",error)
} 

//map function
const myarray=["kiwi","orange","mango"];
myarray.map((items)=>{
    console.log(items);
    
})

//destructuring

let nums=[1,2,3,4,5];
let[one,two,three,four,seven=7]=nums;
console.log(one);
let[...rest]=nums;
console.log(...rest);


const individuals={names:"akshatha",age:21,degree:"BCA"};
const{names,age,degree,role="sde"}=individuals;
console.log(age,role);


//...operator
let numOne=[1,2,3];
let numTwo=[4,5,6];
let combined=[...numOne,...numTwo];
console.log(combined);

let items2={
    name:"airpods",
    model:"boat"
};
let car={
    type:"ford",
    year:2011

};

console.log({...items2,...car});
console.log([...numOne,...numTwo]);







 














