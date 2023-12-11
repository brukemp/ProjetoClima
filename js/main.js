//91af565af45d3d657ae8973637b51c7c


const search = async () => {
  //pega o nome da cidade
  const city = document.querySelector("#city-input").value

  //api que pega as coordenadas da cidade
  const responseCoord =  await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=91af565af45d3d657ae8973637b51c7c`)

  //.json() serve para transformar o arquivo json em um objeto JavaScript
  const dataCoord = await responseCoord.json()


  //api que usa as coordenadas para pegar o clima atual
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataCoord[0].lat}&lon=${dataCoord[0].lon}&lang=pt&appid=91af565af45d3d657ae8973637b51c7c`)
  const data = await response.json()
  


  //mudando os valores na tela
  const cityName = document.querySelector("#city")
  cityName.innerHTML = data.name

  const temp = document.querySelector("#temperature")
  temp.innerHTML = Math.floor(data.main.temp - 273) + "&deg;C"

  const umidity = document.querySelector("#umidity")
  umidity.innerHTML = '<i class="fa-solid fa-droplet"></i> ' + data.main.humidity + "%"

  const cityDescription = document.querySelector("#description-location")
  cityDescription.innerHTML = `
    <p id="description">${data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Condições do tempo" id="weather-icon"/>
  `

  const cityWind = document.querySelector("#wind")
  cityWind.innerHTML = '<i class="fa-solid fa-wind"></i> ' + (data.wind.speed * 3,6) + " <span>Km/h</span>"

  const flag = document.querySelector("#flag")
  flag.innerHTML = `<img src="https://flagcdn.com/16x12/${data.sys.country.toLowerCase()}.png" alt="Bandeira do país" id="country" />`

}

