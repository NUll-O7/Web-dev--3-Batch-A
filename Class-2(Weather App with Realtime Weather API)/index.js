const tempratureField = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')
const timeAndDateField = document.querySelector('.time_location span')
const locationField = document.querySelector('.time_location p ')
const conditionIconField = document.querySelector('.weather_condition img')
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

 let cityName = data.location.name
 let TimeAndDate = data.location.localtime
 let tempC = data.current.temp_c
 let condition = data.current.condition.text
 let conditionIcon = data.current.condition.icon


 console.log(cityName)
 console.log(TimeAndDate)
 console.log(tempC)
 console.log(condition)
 console.log(conditionIcon)

 updateFields(cityName , TimeAndDate , tempC , condition , conditionIcon)



}


function updateFields(location , tandD , temp , condition , conditionIcon){
   tempratureField.innerText = `${temp} C`
   locationField.innerText = location
   timeAndDateField.innerText = tandD
   conditionField.innerText = condition
   conditionIconField.src = conditionIcon

}


