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


const p1 = new Promise(function(resolve , reject){
    resolve('Promise Reosolved')
})

// p1.then(function(result){
//     console.log(result)
// })

 async function handlePromise(){
   let data =  await p1
   console.log(data)
}

handlePromise()