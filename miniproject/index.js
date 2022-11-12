// let promise = new Promise((resolve,reject) =>{
//      let a = 9;
//      let b = 9;
//      if(a==b)
//      {
//         resolve("true")
//      }
//      else{
//           reject("false")
//      }
// });
    
// promise.then((m)=>{
//        console.log(m);
// }).catch((err)=>{
//     console.log(err);
// })

// let promise = new Promise((r,re)=>{
//     let a = 9;
//     let b = 9;
//     if(a==b){
//         r("true")
//     }
//     else{
//         re("false")
//     }
// });

// promise.then((t)=>{
//     console.log(t)
// }).catch((err)=>{
//     console.log(err);
// })

// let promise = new Promise((resolve,reject)=>{
//     let a = "Hello";
//     let b = "HELLO";
//     let A = a.toUpperCase()
//     // let B = b.toUpperCase()
//     if(A==b){
//         resolve("true")
//     }
//     else{
//         reject("false")
//     }
// })

// promise.then((t)=>{
//     console.log(t)
// }).catch((err)=>{
//     console.log(err);
// })


//promise

// let a = () =>{
//     let a = 9;
//     let b = 9;
//     if(a==b)
//     {
//         console.log("true")
//     }else{
//         console.log("false")
//     }
//    }
//  a()

//promise 
//   let promise = new Promise((resolve,reject)=>{
//     let = 9
//     if(9>8.9){
//         resolve("true")
//     }
//     else{
//         reject("false")
//     }
//   })

// promise.then((m)=>{
//     console.log(m)
// }).catch((err)=>{
//     console.log(err)
// })

//promise

// let promise = new Promise((resolve,reject)=>{
//     if(9>8){
//         resolve("Promise resolved")
//     }
//     else{
//         reject("Promise rejected")
//     }
// })

// promise.then((m)=>{
//     console.log(m)
// }).catch((err)=>{

//     console.log(err)
// })

//closures

//     function abc(){
//     let name = "Priyanshu"
//     function hello(){
//         console.log(`Hello My name is ${name}`)
//     }
//     hello()
// }

// abc()

//callback

// function abc(){
//     console.log("Hello This is me")
// }

// function greet(callback){
//     console.log(`Hello this is me Priyanshu Verma`);
//     callback()
// }

// greet(abc)

//callback hell

// function abc(a,t,callback){
//     return new Promise((r,re)=>{
//         setTimeout(() => {
//             console.log(a)
//             callback()
//         }, t);
//     })
// }

// function printAlfa(){
//     abc("A",2000,()=>{
//         abc("E",2000,()=>{
//             abc("I",2000,()=>{
//                 abc("O",2000,()=>{
//                     abc("U",2000,()=>{

//                     })
//                 })
//             })
//         })
//     })
// }

// printAlfa()


//async await


function abc(a,t){
        return new Promise((r,re)=>{
            setTimeout(() => {
                console.log(a)
                r("Hello")
            }, t);
        })
    }
    
   async function greet(){
        await abc("A",2000)
        await abc("E",2000)
        await abc("I",2000)
        await abc("O",2000)
        await abc("U",2000)
   }

   greet()