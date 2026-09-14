// call back
// function hello(n1,n2,callback){
// console.log("hello world");
// callback();
// }
// let a=10;
// let b=20;
// console.log(hello(a,b,sayHi));
// console.log(hello(a,b,sayHello));

// console.log(hello(a,b, function demo(){
// console.log("callback is calling");
// }))


// function sayHi(){
//     console.log("call back");

// }
// sayHi();

// function sayHello(){
// console.log("this is 2nd callback function");
// }
// sayHello();

// promises
// const promiseOne=new Promise((resolve,reject)=>{
//     console.log("successfull data passed....");
//     resolve("resolve promises");
// })
// promiseOne.then((result)=>{
// console.log(result);


// }).catch((error)=>{
// console.log(error)
// })
new Promise(function(resolve,reject){
setTimeout(function(){
    let msg=true;
    if(!msg){
       resolve("user : Asynch task")
    }else{
        reject("ERROR : undefined data....")
    }
    console.log("asynchronos task ....");
   
},1000)
}).then(function(result){
    console.log("async task 2")
}).catch(function(error){
    console.log("error")
})