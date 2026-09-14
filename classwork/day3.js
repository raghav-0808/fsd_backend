//Aynchronous js using async/await
async function test(){
   await console.log("ID");
    await console.log("MANGER");
    console.log("27YEAR");

}
console.log("FROM ABES");
test()
console.log("5");

//create promises that resolve with Assisgment submitted and  print using then(),reject with submission failed
//async function that display user data
    const Assisgment = new Promise((resolve,reject)=>{
        setTimeout(function(){
            let msg=true;
            if(!msg){
                resolve("data");
            }else{
                reject("not given data")
            }

        },1000);
       
    })
    Assisgment.then((result)=>{
        console.log(result);
    })
    Assisgment.catch((error)=>{
        console.log(error);
    })

//Async function for data
// async function data(){
//     await console.log(" 2:message");
//    const response=await fetch("./studentdata.json");

//    console.log(response.status);
//    const std=await response.json();
//    return std;

   
//    await console.log("3 : message");
//    console.log("4:message");
// }

// data()
// .then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
