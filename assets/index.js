const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('.searchBtn')
const input = document.getElementById('lat','lon')

let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

itemsArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemsArray))

data.forEach((item) => {
  liCity(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

const liCity = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
  }

  form.addEventListener('searchBtn', function (e) {
    e.preventDefault()
  
    liCity(input.value)
    input.value = ''
  })

