

const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')



let target = 'Mumbai'

form.addEventListener('submit' , searchFn)

function searchFn(e){
    e.preventDefault()
    target = searchField.value
    fetchData(target)
}



async function fetchData(target){
let endpoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`

 const response =  await fetch(endpoint)

 const data = await response.json()

 console.log(data)
}


