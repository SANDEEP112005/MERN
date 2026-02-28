// console.log("Hello World");
// var a;
// a=10;
// var a;
// a=20;
// let b=10;
// //let b;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);


//logical (&&,||,!)
// var a=true;
// var b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// //control statement
// //conditional statement(if,if...else,else if,switch)
// //if(even)
// var a=10;
// if(a%2===0){
//     console.log("Even");
// }

// //if...else
// if(a%2==0){
//     console.log(`${a} is Even`);
// }
// else{
//     console.log(`${a} is Odd`);
// }
// //else if
// var mark=80;
// if(mark>90){
//     console.log("O grade");
// }
// else if(mark>70){
//     console.log("A grade");
// }
// else if(mark>35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

//Ternary operator (condition? true : false)
// var c=5;
// const result=(c%2==0) ?`${c} is Even`:`${c} is Odd`;
// console.log(result);

// var mark=80;
// const grade=(mark>90) ? `O grade` : (mark>70) ? `A grade` : (mark>35) ? `Pass` : `Fail`;
// console.log(grade);

//switch
// var day=5;
// switch(day){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid");
// }

//loops(for,while,do while)
// for loop
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//while loop
// var num=1234;
// var count=0;
// while(num>0){
//     count++;
//     console.log(num);
//     num=Math.floor(num/10);
// }
// console.log(count);

//do while loop
// var a=0;
// do{
//     console.log("Example do while");
// }while(a!=0);

//normal function
// function add(a,b){
//     // var a=10;
//     // var b=20;
//     console.log(a+b);
// }
// add(10,20);

// //arrow function
// var add=()=>{
//     console.log("It is arrow function");
// }
// add();
// //with parameter
// var add=(a,b)=>{
//     console.log(a+b);
// }
// add(10,20);
// //with return
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));

// //call back
// var add=(a,b,demo)=>{
//     demo(a+b);
// }
// var result=(res)=>{
//     console.log(res);
// }
// add(10,20,result);
// //Example-1
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// add(10,20,(res)=>{
//     console.log(res);
// });
//Example-2
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// add(10,20,(res)=>{
//     console.log(res);
// });
// add(10,20,(res)=>{
//     for(let i=1;i<=res;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// });

// //spread operator(...) (ES6)
// var arr=[1,2,3];
// var arr2=[...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

// //Destructuring operator (ES6)
// var [m1,m2,m3,m4,m5]=[99,98,97,96,95];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// //
// var {name,age,dept,contact} ={
//     name:'venkey',
//     age:20,
//     dept:["DS","AI"],
//     contact:{mobile:9392837185,mail:'venkeyr162@gmaol.com'}
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

// //for..in
// var arr=[10,20,30,40];////Array
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj={ //object
//     name:'venkey',
//     age:20,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key);
// }

// //for..of
// var arr=[10,20,30,40]; //Array
// for(let value of arr){
//     console.log(value);
// }
// //forEach
// arr.forEach((index,val)=>{
//     console.log(index,val);
// })

// //Map
// var arr=[1,2,3,4,5];
// var double=arr.map((val)=>(val*2));
// console.log(double);
// //filter
// var arr=[1,2,3,4,5];
// var even=arr.filter((val)=>(val%2==0))
// console.log(even);
// //reduce
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);
// //Example
// var result=arr.map((val)=>(val**2)).filter((val)=>val%2==0).reduce((sum,val)=>(sum+val),0);
// console.log(result);

// //hosting
// console.log(a);
// var a;
// //function hosting
// add();
// function add(){
//     console.log(10+20);
// }

// //global scope
// //var
// var a=10;  //global scope
// if(true){
//     var b=20; //block scope
// }
// console.log(a);
// console.log(b);

// //const
// const i=10; //global scope
// if(true){
//     const j=20; //block scope
// }
// console.log(i);
// console.log(j);