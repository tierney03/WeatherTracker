const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('.searchBtn')
const input = document.getElementById('city')
const clear = document.querySelector('.clear')
const inputValue = document.querySelector('.inputValue')
let itemsArray = []

let cityWeather = "Nashville"
const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']

function fetchWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q={cityWeather}&appid={d4adb16a540d05747383168aac8cb7cd}')
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function saveCity(newCity) {
  let data = JSON.parse(localStorage.getItem('saved-cities')) || []
  data.push(newCity)
  localStorage.setItem('saved-cities', JSON.stringify(data))
}

const liCity = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
  }

function displayCity() {
  let data = JSON.parse(localStorage.getItem('saved-cities')) || []
  ul.innerText = ''
  data.forEach((city) => {
  liCity(city)
})
}
displayCity()

clear.addEventListener('click', function () {
  localStorage.clear()
  displayCity()
  }
)

  button.addEventListener('click', function (e) {
    e.preventDefault()
  
    saveCity(input.value)
    input.value = ''
    displayCity()
  })




