// Async-Await 

// async function fetchData(){
//     return new Promise(function(resolve , reject){
//         resolve("Promise Resolved")
//     })
// }

// let dataPromise = fetchData()

// dataPromise.then(function(result){
//     console.log(result)
// })


// const p1 = new Promise(function(resolve , reject){
//     resolve('Promise Reosolved')
// })

// // p1.then(function(result){
// //     console.log(result)
// // })

//  async function handlePromise(){
//    let data =  await p1
//    console.log(data)
// }

// handlePromise()



const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('Promise 2 resolved')
    } , 7000)
})
const p3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('Promise 3 resolved')
    } , 5000)
})



async function handlePromiseAsync(){
    console.log('Scaler')
   let result2 = await p2// 7 sec
    console.log(result2)
    let result3 = await p3 // 5sec 
    console.log(result3)
    console.log("create Impact")
  

}
function printHello(){
    console.log("hello")
}
handlePromiseAsync()

printHello()


// resolvePromise()







// function resolvePromise(){
//     p2.then(function(result){
//        console.log(result)
//      })
   
//      console.log('Scaler')
//    }



